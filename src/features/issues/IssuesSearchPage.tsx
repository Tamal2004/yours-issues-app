import React from 'react';

import { styled } from 'theme';

const Heading = styled.h1`
    ${({ theme }) => theme.typography.headline};
`;

const IssuesSearchPage: React.FC = () => {
    return <Heading>Issues search page boilerplate</Heading>;
};

export default IssuesSearchPage;
