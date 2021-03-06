import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';

import { styled } from 'theme';
import Button from 'atoms/Button';
import Input from 'molecules/Input';
import Layout from 'templates/Layout';

import { useAppSelector } from 'utils/hooks/store';

import {
    issuesSearchFormInitialValues,
    issuesSearchFormSchema
} from './issuesSearchForm';
import { useHandleSubmit } from './hooks';

const Background = styled(Layout)`
    background: url('/background-splash.png');
    background-size: cover;
`;

const Container = styled.div`
    grid-column: content-start / content-end;

    display: grid;
    grid-template-areas:
        'form'
        'error';
    grid-row-gap: 2rem;

    padding: 26rem 17rem 0;
`;

const StyledForm = styled(Form)`
    grid-area: form;

    display: grid;

    grid-template-areas:
        'owner repository'
        'button button';

    grid-column-gap: 3.25rem;
    grid-row-gap: 2rem;
`;

const StyledInput = styled(Input)`
    &.owner {
        grid-area: owner;
    }
    &.repository {
        grid-area: repository;
    }
`;

const StyledButton = styled(Button)`
    grid-area: button;
    grid-column: 1 / -1;

    justify-self: center;
`;

const Error = styled.span<{ $hasError: boolean }>`
    grid-area: error;
    justify-self: center;

    width: max-content;
    height: 7rem;
    padding: 2rem;

    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.error.light};

    color: ${({ theme }) => theme.colors.error.main};
    background-color: ${({ theme }) => theme.colors.error.dark};
    transition: all 300ms;

    ${({ theme }) => theme.typography.button};
    font-weight: 400;

    opacity: ${({ $hasError }) => ($hasError ? '1' : '0')};
`;

const IssuesSearchPage: React.FC = () => {
    const { error } = useAppSelector((state) => state.issues);

    const [errorMessage, setErrorMessage] = useState('');

    // Sticky error message to avoid content flicker with transitions
    useEffect(() => {
        if (error) setErrorMessage(error);
    }, [error, setErrorMessage]);

    const handleSubmit = useHandleSubmit();

    return (
        <Background>
            <Container>
                <Error role='errorToast' $hasError={!!error}>
                    {errorMessage}
                </Error>
                <Formik
                    initialValues={issuesSearchFormInitialValues}
                    validationSchema={issuesSearchFormSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit, isValid, isSubmitting }) => (
                        <StyledForm onSubmit={handleSubmit}>
                            <StyledInput
                                id='owner'
                                className='owner'
                                label='Owner'
                                placeholder='Owner name'
                                required
                            />
                            <StyledInput
                                id='repository'
                                className='repository'
                                label='Repository'
                                placeholder='Repository name'
                                required
                            />
                            <StyledButton
                                type='submit'
                                disabled={!isValid}
                                loading={isSubmitting}
                            >
                                Show issues
                            </StyledButton>
                        </StyledForm>
                    )}
                </Formik>
            </Container>
        </Background>
    );
};

export default IssuesSearchPage;
