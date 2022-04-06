import React from 'react';

import { styled } from 'theme';
import { useAppDispatch, useAppSelector } from 'utils/hooks/store';
import Issue from 'features/issues/IssuesPage/Issue';
import { fetchIssues } from 'features/issues/issuesSlice/actions';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid ${({ theme }) => theme.colors.border.light};
    border-radius: 1rem;
    overflow: hidden;
`;

const TabHeader = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-column-gap: 3rem;
    align-items: center;

    width: 100%;

    padding: 2rem 3.25rem;

    background-color: ${({ theme }) => theme.colors.background.main};
`;

const Tab = styled.button<{ $active: boolean }>`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-column-gap: 1rem;
    align-items: center;

    background: initial;
    border: initial;
    padding: 0;

    transition: all 300ms;
    cursor: pointer;

    opacity: ${({ $active }) => ($active ? '1' : '0.5')};
`;

const TabIcon = styled.img`
    width: 2.25rem;
`;

const TabText = styled.span`
    color: ${({ theme }) => theme.colors.grey.main};
    ${({ theme }) => theme.typography.button};
`;

const Issues: React.FC = () => {
    const { state, openIssuesCount, closedIssuesCount, issues } =
        useAppSelector((state) => state.issues);
    const dispatch = useAppDispatch();

    const handleOpenIssues = () => {
        dispatch(fetchIssues({ state: 'open' }));
    };
    const handleClosedIssues = () => {
        dispatch(fetchIssues({ state: 'closed' }));
    };

    return (
        <Container>
            <TabHeader>
                <Tab $active={state === 'open'} onClick={handleOpenIssues}>
                    <TabIcon alt='Open Issues' src='/open-issue.png' />
                    <TabText>{openIssuesCount} Open</TabText>
                </Tab>
                <Tab $active={state === 'closed'} onClick={handleClosedIssues}>
                    <TabIcon alt='Closed Issues' src='/closed-issue.png' />
                    <TabText>{closedIssuesCount} Closed</TabText>
                </Tab>
            </TabHeader>
            {issues.map(({ id, ...issue }) => (
                <Issue key={id} {...issue} />
            ))}
        </Container>
    );
};

export default Issues;
