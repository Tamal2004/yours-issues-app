import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { fetchIssues, fetchRepository } from './actions';
import { Issue, RepositoryAttributes } from 'types/issues';

interface IssuesState extends RepositoryAttributes {
    error: string;
    openIssuesCount: number;
    closedIssuesCount: number;
    state: 'open' | 'closed';
    issues: Issue[];
}

const initialState: IssuesState = {
    error: '',
    owner: '',
    repository: '',
    openIssuesCount: 0,
    closedIssuesCount: 0,
    state: 'open',
    issues: []
};

const issuesSlice = createSlice({
    name: 'issues',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            if (state.owner) return state;

            //@ts-ignore
            state = { ...state, ...(action.payload.issues as IssuesState) };
            return state;
        });
        builder.addCase(fetchRepository.fulfilled, (state, { payload }) => {
            state = { ...state, ...payload };
            return state;
        });
        builder.addCase(fetchRepository.pending, (state) => {
            state.error = initialState.error;
            return state;
        });
        builder.addCase(fetchRepository.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload.errorMessage;
            }
            return state;
        });
        builder.addCase(fetchIssues.fulfilled, (state, { payload }) => {
            state.issues = payload.issues;
            state.state = payload.state;
            return state;
        });
    }
});

export const { name, reducer } = issuesSlice;
