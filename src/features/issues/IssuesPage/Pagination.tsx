import ReactPaginate from 'react-paginate';

import { styled } from 'theme';

const Pagination = styled(ReactPaginate)`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-column-gap: 0.5rem;
    justify-content: center;

    padding: 5rem 0 0;
    list-style: none;

    & .active {
        background-color: ${({ theme }) => theme.colors.primary.main};
    }

    & > li {
        border: 1px solid transparent;
        border-radius: 0.75rem;

        &:not(.page-break, .disabled) {
            cursor: pointer;
        }

        &:hover:not(.page-break, .disabled) {
            border-color: ${({ theme }) => theme.colors.border.light};
        }
    }

    .page-break {
        pointer-events: none;
        cursor: initial;
    }

    & .page-link {
        padding: 0.625rem 1.25rem;
        color: ${({ theme }) => theme.colors.grey.lightest};
    }

    & .page-item {
        display: flex;
        ${({ theme }) => theme.typography.paginate};
    }

    & .active {
        background-color: ${({ theme }) => theme.colors.primary.main};

        color: ${({ theme }) => theme.colors.grey.main};
    }

    & .page-previous,
    .page-next {
        display: flex;
        align-items: center;

        &::before,
        &::after {
            margin: 0 0.875rem;
        }

        &:not(.disabled) {
            color: ${({ theme }) => theme.colors.primary.main};
            & .page-link {
                color: inherit;
            }

            &::before,
            &::after {
                border-color: ${({ theme }) => theme.colors.primary.main};
            }
        }
    }

    & .page-previous {
        & .page-link {
            padding-left: 0;
        }

        &::before {
            content: '';
            display: block;
            width: 0.875rem;
            height: 0.875rem;
            border: 2px solid ${({ theme }) => theme.colors.grey.lightest};
            border-right: initial;
            border-top: initial;
            transform: rotate(45deg);
        }
    }

    & .page-next {
        & .page-link {
            padding-right: 0;
        }

        &::after {
            content: '';
            display: block;
            width: 0.875rem;
            height: 0.875rem;
            border: 2px solid ${({ theme }) => theme.colors.grey.lightest};
            border-left: initial;
            border-bottom: initial;
            transform: rotate(45deg);
        }
    }
`;

export default Pagination;
