import React from 'react';

import { styled } from 'theme';
import { Issue } from 'types/issues';

const Panel = styled.div`
    display: flex;

    border-top: 1px solid ${({ theme }) => theme.colors.border.light};
    overflow: hidden;

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.main};
    }
`;

const Icon = styled.img``;

const Title = styled.h3``;

const Subtitle = styled.h4``;

const Comment = styled.span``;

const Issue: React.FC<Omit<Issue, 'id'>> = ({ title }) => {
    return (
        <Panel>
            <Icon alt={'rstr'} src={''} />
            <Title>{title}</Title>
        </Panel>
    );
};

export default Issue;
