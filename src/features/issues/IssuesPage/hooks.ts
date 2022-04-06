import { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from 'utils/hooks/store';
import { fetchIssues } from 'features/issues/issuesSlice/actions';

export const useRerouteIfFreshShallowRender = () => {
    const router = useRouter();
    const owner = useAppSelector((state) => state.issues.owner);
    useEffect(() => {
        if (!owner) router.push('/');
    }, [owner]);
};

const ISSUES_PER_PAGE = 20;
export const usePaginateProps = () => {
    const { state, openIssuesCount, closedIssuesCount, currentPage } =
        useAppSelector((state) => state.issues);

    const pageCount = useMemo(() => {
        const issuesCount =
            state === 'open' ? openIssuesCount : closedIssuesCount;
        return Math.ceil(issuesCount / ISSUES_PER_PAGE);
    }, [state, openIssuesCount, closedIssuesCount]);

    const dispatch = useAppDispatch();
    const handlePageClick = useCallback(
        ({ selected }: { selected: number }) => {
            dispatch(fetchIssues({ page: selected + 1, state }));
        },
        [state, dispatch]
    );

    return { pageCount, currentPage, handlePageClick };
};
