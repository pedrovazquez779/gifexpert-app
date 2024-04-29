import {renderHook, waitFor} from '@testing-library/react';
import {useFetchGifs} from '../../src/hooks/useFetchGifs.js';

describe('Testing useFetchGifs hook', () => {
    test('Should return initial state', () => {
        const {result} = renderHook( () => useFetchGifs('Goku'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('Should return images and isLoading in false', async () => {
        const {result} = renderHook( () => useFetchGifs('Goku'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
});