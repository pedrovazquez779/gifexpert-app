import {fireEvent, render, screen} from '@testing-library/react';
import {AddCategory} from '../../src/components/index.js';

describe('Testing <AddCategory /> component', () => {

    test('Should change text box', () => {
        render(<AddCategory onNewCategory={() => {
        }}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Goku'}})
        expect(input.value).toBe('Goku');
    })

    test('Should call onNewCategory if input has a value', () => {
        const inputValue = 'Goku';
        // This is a mock function
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('Should not call onNewCategory if input is empty', () => {
        // This is a mock function
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    })
});