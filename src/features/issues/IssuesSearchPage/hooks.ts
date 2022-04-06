import { useRouter } from 'next/router';

import { useAppDispatch } from 'utils/hooks/store';
import { RepositoryAttributes } from 'types/issues'
    ;
import { fetchRepository } from '../issuesSlice/actions';

export const useHandleSubmit = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    return async ({ owner, repository }: RepositoryAttributes) => {
        const redirect = () => {
            router.push(
                `/${owner}/${repository}?shallow=true`,
                `/${owner}/${repository}`
            );
        };
        await dispatch(fetchRepository({ owner, repository, redirect }));
    };
};
