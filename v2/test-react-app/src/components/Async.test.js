import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('<Async> component', () => {
    test('renders posts if request succeeds', async () => {
        render(<Async />);

        // See more about roles here: https://www.w3.org/TR/html-aria/#docconformance

        // Here, if we do:
        // const listItemElements = screen.getAllByRole('listitem');
        // it fails. Instead, we use findAllByRole. The difference is that findAllByRole,
        // or in general those 'find' queries, as opposed to the 'get' queries, returns a promise.
        // Since we get back a promise, the react testing library will basically re-evaluate the screen
        // a couple of times until this succeeds. Therefore, this will then wait for the HTTP request to succeed.
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});