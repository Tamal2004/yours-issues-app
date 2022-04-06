import React from 'react';

import { render, fireEvent } from 'utils/testUtils';
import Button from './Button';

describe('<Button />', () => {
    it('should render a button', () => {
        const mockClick = jest.fn();
        const { getByText } = render(<Button onClick={mockClick}>Show</Button>);

        const TestButton = getByText('Show');
        expect(TestButton).toBeInTheDocument();
        expect(TestButton).toMatchSnapshot();
    });

    it('should perform the passed on click function', () => {
        const mockClick = jest.fn();
        const { getByText } = render(<Button onClick={mockClick}>Show</Button>);
        fireEvent.click(getByText('Show'));
        expect(mockClick.mock.calls.length).toBe(1);
    });

    it('should not perform passed on click function when disabled', () => {
        const mockClick = jest.fn();

        const { getByText } = render(
            <Button onClick={mockClick} disabled>
                Show
            </Button>
        );

        fireEvent.click(getByText('Show'));
        expect(mockClick.mock.calls.length).toBe(0);
    });

    it('should not perform passed on click function when loading', () => {
        const mockClick = jest.fn();

        const { getByText } = render(
            <Button onClick={mockClick} loading>
                Show
            </Button>
        );

        fireEvent.click(getByText('Show'));
        expect(mockClick.mock.calls.length).toBe(0);
    });
});
