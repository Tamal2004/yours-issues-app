import { createAsyncThunk } from '@reduxjs/toolkit';

import { getClosedIssuesCount, getIssues } from 'services/issuesApi';
import { getRepository } from 'services/repositoriesApi';

import { RepositoryAttributes } from 'types/issues';

interface FetchIssuesParameters extends Partial<RepositoryAttributes> {
    page?: number;
    state?: 'open' | 'closed';
}

interface FetchIssuesPayload {
    issues: any[];
}

export const fetchIssues = createAsyncThunk<
    FetchIssuesPayload,
    FetchIssuesParameters
>(
    'issues/fetch',
    async ({ owner, repository, page = 1, state = 'open' }, thunkApi) => {
        const issuesResponse = await getIssues({
            owner: owner || (thunkApi.getState().issues.owner as string),
            repository:
                repository || (thunkApi.getState().issues.repository as string),
            page,
            state
        });

        if (issuesResponse.status !== 200) {
            // Something went wrong
            return thunkApi.rejectWithValue({
                errorMessage: 'Something went wrong'
            });
        }

        // Success
        const { data } = issuesResponse;

        return {
            issues: data
        };
    }
);

interface FetchRepositoryPayload extends RepositoryAttributes {
    openIssuesCount: number;
    closedIssuesCount: number;
}

interface FetchRepositoryError {
    errorMessage: string;
}

export const fetchRepository = createAsyncThunk<
    FetchRepositoryPayload,
    RepositoryAttributes,
    {
        rejectValue: FetchRepositoryError;
    }
>('repository/fetch', async ({ owner, repository }, thunkApi) => {
    // Used to get repository metadata & the number of open issues
    try {
        const repositoryResponse = await getRepository({ owner, repository });

        // Success
        const {
            data: { open_issues_count }
        } = repositoryResponse;

        const closedIssuesResponse = await getClosedIssuesCount({
            owner,
            repository
        });

        let closedIssuesCount = 0;

        if (closedIssuesResponse.status === 200) {
            closedIssuesCount = closedIssuesResponse.data.total_count;
        }

        await thunkApi.dispatch(fetchIssues({ owner, repository }));

        return {
            owner,
            repository,
            openIssuesCount: open_issues_count,
            closedIssuesCount
        };
    } catch (error) {
        return thunkApi.rejectWithValue({
            errorMessage: 'Repository not found'
        });
    }
});
