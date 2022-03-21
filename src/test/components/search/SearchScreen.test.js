import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockNavigate
}))

describe('Pruebas en <SearchScreen/>', ()=>{

    test('Debe de mostrarse correctamente con valores por defecto', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen/>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.bg-white.text-gray-400').text().trim()).toBe('Busca un heroe, para que se muestre aquí');
    });

    test('Debe de mostrar a Batman y el input con el valor del queryString', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen/>
            </MemoryRouter>
        );

        expect(wrapper.find('input.bg-gray-100').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar un error si no se encuentra el hero', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchScreen/>
            </MemoryRouter>
        );

        expect(wrapper.find('.bg-red-600').exists()).toBe(true);
        expect(wrapper.find('.bg-red-600').text().trim()).toBe('No hay resultados de batman123');
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar el navigate a la nueva pantalla',()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen/>
            </MemoryRouter>
        );

        wrapper.find('.bg-gray-100').simulate('change', {
            target:{
                name: 'searchText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault:()=>{}
        })

        expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
    });
})