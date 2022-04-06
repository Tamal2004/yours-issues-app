import React from 'react';

import { styled } from 'theme';
import { useAppSelector } from 'utils/hooks/store';

import Layout from 'templates/Layout';

import Issues from './Issues';
import Pagination from './Pagination';
import { usePaginateProps, useRerouteIfFreshShallowRender } from './hooks';

const Background = styled(Layout)`
    padding-bottom: 16rem;
    background-color: ${({ theme }) => theme.colors.background.dark};
`;

const HeadingWrapper = styled.div`
    width: 100%;

    display: grid;
    align-content: center;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-column-gap: 1rem;

    margin-bottom: 2rem;
`;

const Heading = styled.h1`
    color: white;
    margin: 0;
    ${({ theme }) => theme.typography.input};
`;

const IssuesCount = styled.span`
    padding: 0.375rem 0.75rem;

    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.background.main};
    color: ${({ theme }) => theme.colors.grey.lightest};

    ${({ theme }) => theme.typography.button};
`;

const IssuesPage: React.FC = () => {
    useRerouteIfFreshShallowRender();
    const { pageCount, currentPage, handlePageClick } = usePaginateProps();

    const { openIssuesCount } = useAppSelector((state) => state.issues);

    return (
        <Background>
            <HeadingWrapper>
                <Heading role='heading'>Issues</Heading>
                <IssuesCount>{openIssuesCount}</IssuesCount>
            </HeadingWrapper>
            <Issues />
            <Pagination
                pageCount={pageCount}
                forcePage={currentPage - 1}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                marginPagesDisplayed={3}
                nextLabel='Next'
                previousLabel='Previous'
                nextClassName='page-item page-next'
                nextLinkClassName='page-link'
                previousClassName='page-item page-previous'
                previousLinkClassName='page-link'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                breakLabel='...'
                breakClassName='page-item page-break'
                breakLinkClassName='page-link'
                containerClassName='pagination'
                activeClassName='active'
                renderOnZeroPageCount={null as unknown as () => null}
            />
        </Background>
    );
};

export default IssuesPage;
