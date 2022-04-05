import * as Yup from 'yup';

export interface IssuesSearchFormValues {
    owner: string;
    repository: string;
}

export const issuesSearchFormInitialValues: IssuesSearchFormValues = {
    owner: '',
    repository: ''
};

export const issuesSearchFormSchema = Yup.object().shape({
    owner: Yup.string().required('This field is required'),
    repository: Yup.string().required('This field is required')
});
