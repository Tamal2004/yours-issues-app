import React, { useMemo } from 'react';

import { styled } from 'theme';

import ChatBubble from 'assets/chat-bubble.svg';

import { Issue } from 'types/issues';

const Panel = styled.div`
    display: grid;

    grid-template-areas:
        'icon   title       .   comment'
        '.      subtitle    .   comment';
    grid-template-columns: max-content 65% 1fr max-content;
    grid-column-gap: 0.875rem;
    grid-row-gap: 0.75rem;

    padding: 2.5rem 3.125rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border.light};
    overflow: hidden;

    &:hover {
        background-color: ${({ theme }) => theme.colors.background.main};
    }
`;

const Icon = styled.img`
    grid-area: icon;
    width: 2.25rem;
`;

const Title = styled.a`
    grid-area: title;

    margin: 0;

    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey.main};
    ${({ theme }) => theme.typography.button};

    &:hover {
        color: ${({ theme }) => theme.colors.primary.main};
    }
`;

const Subtitle = styled.h4`
    grid-area: subtitle;

    margin: 0;
    color: ${({ theme }) => theme.colors.grey.main};
    ${({ theme }) => theme.typography.tooltip};

    & > span {
        color: inherit;
        opacity: 0.5;
    }

    & > a {
        color: inherit;
        cursor: pointer;
        text-decoration: none;
        opacity: 0.5;

        &:hover {
            color: ${({ theme }) => theme.colors.primary.main};
            opacity: 1;
        }
    }
`;

const Comment = styled.a`
    grid-area: comment;

    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 0.75rem;
    align-content: center;
    align-items: center;

    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey.lightest};

    ${({ theme }) => theme.typography.tooltip};

    & > svg {
        margin-top: 0.75rem;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.primary.main};
        & > svg > path {
            fill: ${({ theme }) => theme.colors.primary.main};
        }
    }
`;

const Issue: React.FC<Omit<Issue, 'id'>> = ({
    title,
    commentsCount,
    issueUrl,
    closedAt,
    number,
    userLoginId,
    createdAt
}) => {

    const userUrl = useMemo(() => {
        if (closedAt) return `${issueUrl}?q=is%3Aissue+author%3A${userLoginId}`;
        else
            return `${issueUrl}?q=is%3Aissue+is%3Aopen+author%3A${userLoginId}`;
    }, [userLoginId, closedAt]);

    return (
        <Panel>
            <Icon
                alt={closedAt ? 'Closed Issue' : 'Open Issue'}
                src={
                    closedAt
                        ? '/closed-issue-colored.png'
                        : '/open-issue-colored.png'
                }
            />
            <Title href={issueUrl}>{title}</Title>
            <Subtitle>
                <span>#{number} </span>
                {closedAt ? (
                    <>
                        <span>by </span>
                        <a href={userUrl}>{userLoginId}</a>
                        <span>
                            was closed on {new Date(closedAt).getTime()}
                        </span>
                    </>
                ) : (
                    <>
                        <span>
                            opened {new Date(createdAt).getTime()} ago by
                        </span>
                        <a href={userUrl}> {userLoginId}</a>
                    </>
                )}
            </Subtitle>
            <Comment href={issueUrl}>
                <ChatBubble height='24px' />
                {commentsCount}
            </Comment>
        </Panel>
    );
};

export default Issue;
