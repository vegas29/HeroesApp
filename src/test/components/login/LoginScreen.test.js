import { MemoryRouter, Routes, Route } from "react-router-dom";
import {mount} from 'enzyme';
import { AuthContext } from '../../../auth/authContext';
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from '../../../types/types';


const mockNavigate= jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

describe('Pruebas en <LoginComponent/>', ()=>{


    const contextValue = {
        dispatch:jest.fn(),
        user:{
            logged:false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<LoginScreen/>}/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('Debe de hacer match con el snapshot', ()=>{

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de realizar el dispatch y la navegacion', ()=>{

        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();

        //dispatch({name: 'Alejandro'})
        expect(contextValue.dispatch).toHaveBeenCalledWith(
            {
                "payload": {"name": "Alejandro"}, 
                "type": "[auth] Login"
            }
        )

        //mockNavigate = (/, {replace:true})
        expect(mockNavigate).toHaveBeenCalledWith('/', {replace:true})

        localStorage.setItem('lastPath', '/dc');
        
        handleClick();

        expect(mockNavigate).toHaveBeenCalledWith('/dc', {replace:true})
    })
})