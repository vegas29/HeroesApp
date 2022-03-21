import { mount } from "enzyme";
import {MemoryRouter} from 'react-router-dom';
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";




describe('Pruebas en <DashboardRoutes/>', ()=>{

    const contextValue = {
        user:{
            logged:true,
            name: 'Diego'
        }
    }


    test('Debe de mostrarse correctamente - Marvel', ()=>{

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        // console.log(wrapper.html());

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span.font-semibold').text()).toBe('Bienvenido Diego');
        expect(wrapper.find('h1').text()).toBe('Marvel Heroes');
    });


    test('Debe de mostrarse correctamente - DC', ()=>{

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        //console.log(wrapper.html());

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text()).toBe('DC Heroes');
    });
})