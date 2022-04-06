import React from 'react';

import { render, fireEvent, screen } from 'utils/testUtils';
import Button from './Button';

describe('<Button />', () => {
    const buttonName = 'Issue'; // Accessibility name

    it('should render a button', () => {
        const clickHandler = jest.fn();
        render(
            <Button aria-label={buttonName} onClick={clickHandler}>
                Issue
            </Button>
        );

        const issueButton = screen.getByRole('button', { name: buttonName });

        expect(issueButton).toBeInTheDocument();
        expect(issueButton).toMatchInlineSnapshot(`
            <button
              aria-label="Issue"
              class="sc-gsnTZi goDtiU"
              role="button"
            >
              Issue
            </button>
        `);
    });

    it('should perform the passed on click function', () => {
        const clickHandler = jest.fn();
        render(
            <Button aria-label={buttonName} onClick={clickHandler}>
                Issue
            </Button>
        );

        fireEvent.click(screen.getByRole('button', { name: buttonName }));
        expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('should not perform passed on click function when disabled', () => {
        const clickHandler = jest.fn();
        render(
            <Button aria-label={buttonName} onClick={clickHandler} disabled>
                Issue
            </Button>
        );

        fireEvent.click(screen.getByRole('button', { name: buttonName }));
        expect(clickHandler).toHaveBeenCalledTimes(0);
    });

    it('should not perform passed on click function when loading', () => {
        const clickHandler = jest.fn();
        render(
            <Button aria-label={buttonName} onClick={clickHandler} loading>
                Issue
            </Button>
        );

        fireEvent.click(screen.getByRole('button', { name: buttonName }));
        expect(clickHandler).toHaveBeenCalledTimes(0);
    });
});
