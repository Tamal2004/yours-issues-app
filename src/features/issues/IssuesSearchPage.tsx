import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/store';
import { actions } from './issuesSlice';

const IssuesSearchPage: React.FC = () => {
    const state = useAppSelector((state) => state.issues.loading);
    const dispatch = useAppDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(actions.get());
        }, 1000);
    }, [dispatch]);
    return <div>Issues search page boilerplate - {state.toString()}</div>;
};

export default IssuesSearchPage;
