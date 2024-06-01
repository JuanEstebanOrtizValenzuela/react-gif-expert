import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {
    test('debe agregar una nueva categoria', () => { 
        render(<GifExpertApp/>);
 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
 
        fireEvent.input(input, {target: {value: 'One'}});
        fireEvent.submit( form );
        fireEvent.input(input, {target: {value: 'Two'}});
        fireEvent.submit( form );
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3);
    });

    test('No debe agregar una categoria repetida', () => { 
        const inputValue = 'Two';
        
        render(<GifExpertApp/>)
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
 
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit( form );
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit( form );
        expect(screen.getAllByText(inputValue).length).toBe(1)

    });
});