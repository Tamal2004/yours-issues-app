import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { styled } from 'theme';
import Layout from 'templates/Layout';
import Input from 'molecules/Input';

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
        'input input'
        'submit submit';
    grid-column-gap: 3.25rem;
`;

interface IssuesSearchFormValues {
    owner: string;
    repository: string;
}

const issuesSearchFormInitialValues: IssuesSearchFormValues = {
    owner: '',
    repository: ''
};
const issuesSearchFormSchema = Yup.object().shape({
    owner: Yup.string().required('This field is required'),
    repository: Yup.string().required('This field is required')
});

const IssuesSearchPage: React.FC = () => {
    return (
        <Background>
            <Container>
                <Formik
                    initialValues={issuesSearchFormInitialValues}
                    validationSchema={issuesSearchFormSchema}
                    onSubmit={() => {}}
                >
                    {({ handleSubmit }) => (
                        <StyledForm onSubmit={handleSubmit}>
                            <Input
                                id='owner'
                                label='Owner'
                                placeholder='Owner name'
                                required
                            />
                            <Input
                                id='repository'
                                label='Repository'
                                placeholder='Repository name'
                                required
                            />
                        </StyledForm>
                    )}
                </Formik>
            </Container>
        </Background>
    );
};

export default IssuesSearchPage;
