import React from 'react';
import { Formik, Form } from 'formik';

import { styled } from 'theme';
import Layout from 'templates/Layout';
import Input from 'molecules/Input';
import Button from 'atoms/Button';

import {
    issuesSearchFormInitialValues,
    issuesSearchFormSchema
} from './issuesSearchForm';

const Background = styled(Layout)`
    background: url('/background-splash.png');
    background-size: cover;
`;

const Container = styled.div`
    grid-column: content-start / content-end;
    padding-top: 26rem;
`;

const StyledForm = styled(Form)`
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

const IssuesSearchPage: React.FC = () => {
    return (
        <Background>
            <Container>
                <Formik
                    initialValues={issuesSearchFormInitialValues}
                    validationSchema={issuesSearchFormSchema}
                    onSubmit={() => {}}
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