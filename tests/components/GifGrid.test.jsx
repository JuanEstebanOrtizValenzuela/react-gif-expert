import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => { 
    const category = 'Naruto';

    test('debe de mostrar el loading incialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Naruto',
                url: 'https://localhost/naruto.jpg'
            },
            {
                id: '123',
                title: 'One Pieces',
                url: 'https://localhost/onepiece.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});