import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { fetchRepository } from './actions';
import {RepositoryAttributes} from "types/issues";

interface IssuesState extends RepositoryAttributes {
    error: string;
    openIssuesCount: number;
    closedIssuesCount: number;
}

const initialState: IssuesState = {
    error: '',
    owner: '',
    repository: '',
    openIssuesCount: 0,
    closedIssuesCount: 0
};

const issuesSlice = createSlice({
    name: 'issues',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            //@ts-ignore
            state = { ...state, ...(action.payload.issues as IssuesState) };
        });
        builder.addCase(fetchRepository.fulfilled, (state, { payload }) => {
            state = { ...state, ...payload };
        });
        builder.addCase(fetchRepository.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload.errorMessage;
            }
        });
    }
});

export const { name, reducer } = issuesSlice;
