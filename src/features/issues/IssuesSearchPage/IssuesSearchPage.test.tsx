import React from 'react';

import { render, fireEvent, screen, waitFor } from 'utils/testUtils';
import {
    mockedRepositoryNotFoundParameters,
    mockedRepositoryWithNoIssuesParameters,
    mockedRepositoryParameters
} from 'services/__mocks__/repositoriesApiMocks';

import IssuesSearchPage from "./index";

describe('Issues integration test', () => {
    it('should result in an error when the repository is not found', async () => {
        render(<IssuesSearchPage />)

        const showIssuesButton = screen.getByRole('button');
        const errorToast = screen.getByRole('errorToast');
        const [ownerInputError, repositoryInputError] =
            screen.getAllByRole('error');
        const [ownerInput, repositoryInput] = screen.getAllByRole('textbox');

        // Show issues button should be able to be clicked on
        expect(showIssuesButton).toHaveStyle(`pointer-events: initial;`);
        // The landing page will not immediately have any error messages showing
        expect(ownerInputError).toHaveStyle(`opacity: 0;`);
        expect(errorToast).toHaveStyle(`opacity: 0;`);

        // Will fire off form validation
        fireEvent.click(showIssuesButton);

        await waitFor(() => {
            // Errors are now shown
            expect(ownerInputError).toHaveStyle(`opacity: 1;`);
            expect(showIssuesButton).toHaveStyle(`pointer-events: none;`);
        });

        fireEvent.change(ownerInput, {
            target: { value: mockedRepositoryNotFoundParameters.owner }
        });

        fireEvent.change(repositoryInput, {
            target: { value: mockedRepositoryNotFoundParameters.repository }
        });

        await waitFor(() => {
            // Errors are gone again
            expect(ownerInputError).toHaveStyle(`opacity: 0;`);
            expect(repositoryInputError).toHaveStyle(`opacity: 0;`);
            expect(showIssuesButton).toHaveStyle(`pointer-events: initial;`);
        });

        // Fire off a submit
        fireEvent.click(showIssuesButton);

        await waitFor(() => {
            // Error toast is showing
            expect(errorToast).toHaveStyle(`opacity: 1;`);
            expect(errorToast).toHaveTextContent('Repository not found');
        });
    });

    it('should result in an error when the repository has no issues', async () => {
        render(<IssuesSearchPage />)

        const showIssuesButton = screen.getByRole('button');
        const errorToast = screen.getByRole('errorToast');
        const [ownerInput, repositoryInput] = screen.getAllByRole('textbox');

        fireEvent.change(ownerInput, {
            target: { value: mockedRepositoryWithNoIssuesParameters.owner }
        });

        fireEvent.change(repositoryInput, {
            target: { value: mockedRepositoryWithNoIssuesParameters.repository }
        });

        // Fire off a submit
        fireEvent.click(showIssuesButton);

        await waitFor(() => {
            // Error toast is showing
            expect(errorToast).toHaveTextContent('Repository has no issues');
        });
    });

    it('should result in redirection to the Issues page on successful form submission', async () => {
        render(<IssuesSearchPage />)

        const showIssuesButton = screen.getByRole('button');
        const [ownerInput, repositoryInput] = screen.getAllByRole('textbox');

        fireEvent.change(ownerInput, {
            target: { value: mockedRepositoryParameters.owner }
        });

        fireEvent.change(repositoryInput, {
            target: { value: mockedRepositoryParameters.repository }
        });

        // Fire off a submit
        fireEvent.click(showIssuesButton);

        await waitFor(() => {
            // Is loading
            expect(showIssuesButton).toHaveStyle(`pointer-events: none;`);
        });

        await waitFor(() => {
            // Done loading
            expect(showIssuesButton).toHaveStyle(`pointer-events: initial;`);
        });
    });
});
