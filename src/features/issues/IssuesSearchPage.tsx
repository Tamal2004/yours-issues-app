import React from 'react';

import { styled } from 'theme';
import Layout from 'templates/Layout';

const Background = styled(Layout)`
    background: url('/background-splash.png');
    background-size: cover;
`;

const Container = styled.div`
    grid-column: content-start / content-end;
`;

const Heading = styled.h1`
    ${({ theme }) => theme.typography.headline};
`;

const IssuesSearchPage: React.FC = () => {
    return (
        <Background>
            <Container>
                <Heading>Issues search page boilerplate</Heading>
            </Container>
        </Background>
    );
};

export default IssuesSearchPage;
