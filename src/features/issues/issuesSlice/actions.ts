import { createAsyncThunk } from '@reduxjs/toolkit';

import { getClosedIssuesCount, getIssues } from 'services/issuesApi';
import { getRepository } from 'services/repositoriesApi';

import { Issue, RepositoryAttributes } from 'types/issues';
import { RootState } from 'utils/store';

interface FetchIssuesParameters extends Partial<RepositoryAttributes> {
    page?: number;
    state?: 'open' | 'closed';
}

interface FetchIssuesPayload {
    issues: Issue[];
    state: 'open' | 'closed';
    currentPage: number;
}

export const fetchIssues = createAsyncThunk<
    FetchIssuesPayload,
    FetchIssuesParameters
>(
    'issues/fetch',
    async ({ owner, repository, state = 'open', page = 1 }, thunkApi) => {
        const store = thunkApi.getState() as RootState;

        const issuesResponse = await getIssues({
            owner: owner || (store.issues.owner as string),
            repository: repository || (store.issues.repository as string),
            state,
            page
        });

        if (issuesResponse.status !== 200) {
            // Something went wrong
            return thunkApi.rejectWithValue({
                errorMessage: 'Something went wrong'
            });
        }

        // Success
        const { data } = issuesResponse;

        // Normalize
        const issues: Issue[] = data.map(
            ({
                id,
                number,
                title,
                comments,
                html_url,
                created_at,
                closed_at,
                user
            }) => ({
                id,
                number,
                title,
                commentsCount: comments,
                issueUrl: html_url,
                userLoginId: user?.login,
                createdAt: created_at,
                closedAt: closed_at
            })
        );

        return {
            issues,
            state,
            currentPage: page
        };
    }
);

interface FetchRepositoryParameters extends RepositoryAttributes {
    redirect?: () => void;
}

interface FetchRepositoryPayload extends RepositoryAttributes {
    openIssuesCount: number;
    closedIssuesCount: number;
    state: 'open' | 'closed';
}

interface FetchRepositoryError {
    errorMessage: string;
}

export const fetchRepository = createAsyncThunk<
    FetchRepositoryPayload,
    FetchRepositoryParameters,
    {
        rejectValue: FetchRepositoryError;
    }
>(
    'repository/fetch',
    async ({ owner, repository, redirect = () => void 0 }, thunkApi) => {
        // Used to get repository metadata & the number of open issues
        try {
            const repositoryResponse = await getRepository({
                owner,
                repository
            });

            const {
                data: { open_issues_count }
            } = repositoryResponse;

            if (!open_issues_count)
                return thunkApi.rejectWithValue({
                    errorMessage: 'Repository has no issues'
                });

            // Success
            const closedIssuesResponse = await getClosedIssuesCount({
                owner,
                repository
            });

            let closedIssuesCount = 0;

            if (closedIssuesResponse.status === 200) {
                closedIssuesCount = closedIssuesResponse.data.total_count;
            }

            await thunkApi.dispatch(fetchIssues({ owner, repository }));

            redirect();
            return {
                owner,
                repository,
                openIssuesCount: open_issues_count,
                closedIssuesCount,
                state: 'open'
            };
        } catch (error) {
            return thunkApi.rejectWithValue({
                errorMessage: 'Repository not found'
            });
        }
    }
);
