import { mount } from "enzyme";
import { AuthContext } from "../../../auth/authContext";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types/types";

const mockNavigate= jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

const contextValue = {
    user:{
        name: 'Pedro',
        logged:true
    },
    dispatch:jest.fn()
}

const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
            <Routes>
                <Route path="/" element={<Navbar/>}/>
            </Routes>
        </MemoryRouter>
    </AuthContext.Provider>
)


describe('Pruebas en <Navbar/>', ()=>{
    test('Debe de mostrar correctamente', ()=>{
        
        

        //Snapshopt
        expect(wrapper).toMatchSnapshot();
        console.log(wrapper.html());

        //span.font-semibold == pedro
        expect(wrapper.find('span.font-semibold').text().trim()).toBe('Bienvenido Pedro')
    })

    test('Debe de llamar el logout, llamar el navigate y el dispatch con los argumentos', ()=>{
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({"type": types.logout});
        expect(mockNavigate).toHaveBeenCalledWith('/login', {replace:true});
    })
})