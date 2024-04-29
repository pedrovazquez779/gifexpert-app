import {GifItem} from '../../src/components/index.js';
import {render, screen} from '@testing-library/react';

describe('Testing <GifItem /> component', () => {

    const title = 'Goku';
    const url = 'https://goku.com/goku.jpg';

    test('Snapshot test match', () => {
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    })

    test('Should show image with the correct URL and ALT', () => {
        render(<GifItem title={title} url={url}/>);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Should show the title', () => {
        render(<GifItem title={title} url={url}/>);

        expect(screen.getByText(title)).toBeTruthy();
    })
});