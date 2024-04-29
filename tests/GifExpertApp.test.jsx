import {fireEvent, render, screen} from '@testing-library/react';
import {GifExpertApp} from '../src/GifExpertApp.jsx';

describe('Testing <GifExpertApp /> component', () => {
    test('Should add new category', () => {
        render(<GifExpertApp/>);
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);

        // Add new category
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        const inputValue = 'Goku';
        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form);

        // Check new category is displayed
        expect(screen.getByText(inputValue)).toBeTruthy();
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2);

        // TODO Warning is thrown here, my guess, it's because the API call is being executed and I'm not sure how to
        // mock it.
    })

    test('Should not add new category', () => {
        render(<GifExpertApp/>);
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);

        // Add new category
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        const inputValue = 'One Punch';
        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form);

        // Check new category is displayed
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);

        // TODO Warning is thrown here, my guess, it's because the API call is being executed and I'm not sure how to
        // mock it.
    })
});