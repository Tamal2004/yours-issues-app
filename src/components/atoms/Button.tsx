import React from 'react';
import { css, styled } from '../../theme/theme';
import SpinningLoader from './SpinningLoader';

type ButtonProps = JSX.IntrinsicElements['button'] & {
    loading?: boolean;
    className?: string; // CSS Overrides
};

const StyledButton = styled.button<{
    $disabled?: boolean;
    $loading?: boolean;
}>`
    position: relative;

    display: grid;
    justify-content: center;
    align-items: center;

    width: min-content;

    border-radius: 1rem;
    border: none;
    outline: none;

    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    user-select: none;
    transition: all 300ms;
    background-color: ${({ theme }) => theme.colors.secondary.main};

    padding: 1.875rem 5.25rem;

    ${({ theme }) => theme.typography.button};

    ${({ $disabled, $loading }) => css`
        pointer-events: ${$disabled || $loading ? 'none' : 'initial'};
        opacity: ${$disabled || $loading ? '0.65' : '1'};
        color: ${$loading ? 'transparent' : 'white'};
    `}
`;

const LoaderWrapper = styled.div<{ $loading: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    transition: all 300ms;
    opacity: ${({ $loading }) => $loading ? '1' : '0'};
`;

const Button: React.FC<ButtonProps> = ({
    disabled = false,
    loading = false,
    onClick,
    children,
    className,
    ref,
    ...restProps
}) => {
    return (
        <StyledButton
            className={className}
            $disabled={disabled}
            $loading={loading}
            disabled={disabled || loading}
            onClick={onClick}
            role='button'
            {...restProps}
        >
            {children}
            {loading && (
                <LoaderWrapper $loading={loading}>
                    <SpinningLoader />
                </LoaderWrapper>
            )}
        </StyledButton>
    );
};

export default Button;
