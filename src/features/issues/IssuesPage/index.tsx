import React from 'react';
import { styled } from 'theme';

import Layout from 'templates/Layout';

import { useAppSelector } from 'utils/hooks/store';

import { useRerouteIfFreshShallowRender } from './hooks';
import Issues from './Issues';

const Background = styled(Layout)`
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

    const { openIssuesCount } = useAppSelector((state) => state.issues);

    return (
        <Background>
            <HeadingWrapper>
                <Heading>Issues</Heading>
                <IssuesCount>{openIssuesCount}</IssuesCount>
            </HeadingWrapper>
            <Issues />
        </Background>
    );
};

export default IssuesPage;
