import { createAsyncThunk } from '@reduxjs/toolkit';

import { getClosedIssuesCount } from 'services/issuesApi';
import { getRepository } from 'services/repositoriesApi';

import { RepositoryAttributes } from 'types/issues';

interface FetchIssuesParameters extends RepositoryAttributes {
    page?: number,
    state?: 'open' | 'closed'
}

interface FetchIssuesPayload extends RepositoryAttributes {
    openIssuesCount: number;
    closedIssuesCount: number;
}

export const fetchIssues = createAsyncThunk<
    // Return type of the payload creator
    FetchIssuesPayload,
    // First argument to the payload creator
    FetchIssuesParameters,
    {
        rejectValue: FetchRepositoryError;
    }
    >('issues/fetch', async ({ owner, repository }, thunkApi) => {
    // Used to get repository metadata & the number of open issues
    const repositoryResponse = await getRepository({ owner, repository });

    if ((repositoryResponse.status as number) === 404) {
        // Repository not found
        return thunkApi.rejectWithValue({
            errorMessage: 'Repository not found'
        });
    } else if ((repositoryResponse.status as number) === 403) {
        // Forbidden
        return thunkApi.rejectWithValue({
            errorMessage: 'Repository is not public'
        });
    } else if ((repositoryResponse.status as number) === 301) {
        // Repository moved permanently
        return thunkApi.rejectWithValue({
            errorMessage: 'Repository has been moved'
        });
    }

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

    return {
        owner,
        repository,
        openIssuesCount: open_issues_count,
        closedIssuesCount
    };
});


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
>('issues/fetch', async ({ owner, repository }, thunkApi) => {
    // Used to get repository metadata & the number of open issues
    const repositoryResponse = await getRepository({ owner, repository });

    if ((repositoryResponse.status as number) === 404) {
        // Repository not found
        return thunkApi.rejectWithValue({
            errorMessage: 'Repository not found'
        });
    } else if ((repositoryResponse.status as number) === 403) {
        // Forbidden
        return thunkApi.rejectWithValue({
            errorMessage: 'Repository is not public'
        });
    } else if ((repositoryResponse.status as number) === 301) {
        // Repository moved permanently
        return thunkApi.rejectWithValue({
            errorMessage: 'Repository has been moved'
        });
    }

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

    return {
        owner,
        repository,
        openIssuesCount: open_issues_count,
        closedIssuesCount
    };
});
