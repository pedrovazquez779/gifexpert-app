import {render, screen} from '@testing-library/react';
import {GifGrid} from '../../src/components/index.js';
import {useFetchGifs} from '../../src/hooks/useFetchGifs.js';

jest.mock('../../src/hooks/useFetchGifs.js');

describe('Testing <GifGrid /> component', () => {
    const category = 'Goku';

    test('Should show the "loading" message', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render(<GifGrid category={category}/>);

        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();

    });

    test('Should show items when useFetchGifs is called', () => {
        const gifs = [
            {
                id: '123',
                title: 'Goku1',
                url: 'https://localhost/goku1.jpg'
            },
            {
                id: '456',
                title: 'Goku2',
                url: 'https://localhost/goku2.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});