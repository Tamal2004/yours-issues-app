import React, { useCallback, useEffect, useState } from 'react';
import { useField } from 'formik';
import { styled, css } from 'theme';

interface FieldProps {
    id: string;
    label: string;
    placeholder: string;
    required?: boolean;
    className?: string; // Overrides
}

const StyledField = styled.div`
    display: grid;
    grid-auto-rows: min-content;
    grid-template-columns: 1fr;
    grid-template-areas:
        'label'
        'input'
        'error';
`;

const Label = styled.label`
    grid-area: label;

    margin-bottom: 1.125rem;

    color: ${({ theme }) => theme.colors.grey.light};
    ${({ theme }) => theme.typography.input};
`;

const Required = styled.span`
    color: ${({ theme }) => theme.colors.error.main};
    ${({ theme }) => theme.typography.input};
`;

const StyledInput = styled.input<{ $hasError: boolean }>`
    grid-area: input;

    padding: 2.5rem 3rem;

    border-radius: 2rem;
    border: solid 1px transparent;
    outline: solid 3px transparent;
    transition: all 300ms;

    color: ${({ theme }) => theme.colors.grey.main};
    background-color: ${({ theme }) => theme.colors.background.light};

    ${({ theme }) => theme.typography.input};

    &:focus {
        ${({ $hasError }) =>
            !$hasError &&
            css`
                border-color: ${({ theme }) => theme.colors.primary.main};
                outline-color: ${({ theme }) => theme.colors.primary.light};
            `};
    }

    ${({ $hasError }) =>
        $hasError &&
        css`
            border-color: ${({ theme }) => theme.colors.error.main};
            outline-color: ${({ theme }) => theme.colors.error.light};
        `};
`;

const Checkmark = styled.img<{ $isValid: boolean }>`
    grid-area: input;

    width: 2rem;
    align-self: center;
    justify-self: end;
    margin-right: 2rem;
    transition: all 300ms;
    
    opacity: ${({ $isValid }) => ($isValid ? '1' : '0')};
`;

const Error = styled.span<{ $hasError: boolean }>`
    grid-area: error;

    position: relative;
    width: fit-content;
    padding: 0.5rem 0.875rem;
    margin-top: 0.875rem;

    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.error.light};

    color: ${({ theme }) => theme.colors.error.main};
    background-color: ${({ theme }) => theme.colors.error.dark};
    transition: all 300ms;

    ${({ theme }) => theme.typography.tooltip};

    opacity: ${({ $hasError }) => ($hasError ? '1' : '0')};
`;

const Input: React.FC<FieldProps> = ({
    id,
    className,
    placeholder,
    label,
    required
}) => {
    const [{ onChange, value, onBlur }, { error, touched }] = useField(id);

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (error) setErrorMessage(error);
    }, [error, setErrorMessage]);

    return (
        <StyledField className={className}>
            <Label htmlFor={id}>
                {label}
                {required && <Required> *</Required>}
            </Label>
            <StyledInput
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                $hasError={!!error && touched}
            />
            <Checkmark $isValid={!error && touched} src='/checkmark.png' />
            <Error $hasError={!!error && touched}>{errorMessage}</Error>
        </StyledField>
    );
};

export default Input;
