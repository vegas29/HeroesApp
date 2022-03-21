import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Pruebas en <AppRouter/>', ()=>{

    

    test('Debe de mostrar el login si no está autenticado', ()=>{

        const contextValue = {
            user: {
                logged:false
            }
        }


        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').text()).toBe('Sign in to your account')
    });

    test('Debe de mostrar el componente inicial si está autenticado', ()=>{

        const contextValue = {
            user: {
                logged:true,
                name:'Alejandro'
            }
        }

        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        console.log(wrapper.html());

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.bg-blue-500').exists()).toBe(true);
    });
})