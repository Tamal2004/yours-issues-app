import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface IssuesState {
    loading: boolean;
}

const initialState: IssuesState = {
    loading: false
};

const issuesSlice = createSlice({
    name: 'issues',
    initialState,
    reducers: {
        placeholder: () => {}
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.issues
            };
        }
    }
});

export const { actions, name, reducer } = issuesSlice;
