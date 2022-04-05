import * as Yup from 'yup';

import { RepositoryAttributes } from '../types';

export const issuesSearchFormInitialValues: RepositoryAttributes = {
    owner: '',
    repository: ''
};

export const issuesSearchFormSchema = Yup.object().shape({
    owner: Yup.string().required('This field is required'),
    repository: Yup.string().required('This field is required')
});
