import IssuesPage from 'features/issues/IssuesPage';

import { wrapper } from 'utils/store';
import { fetchRepository } from 'features/issues/issuesSlice/actions';
import { RepositoryAttributes } from 'types/issues';

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    // @ts-ignore
    async (context) => {
        const { owner, repository } =
            context.params as unknown as RepositoryAttributes;
        const { shallow = false } = context.query;

        if (!shallow) {
            await store.dispatch(fetchRepository({ owner, repository }));
            if (store.getState().issues.error) {
                return {
                    redirect: {
                        destination: '/',
                        permanent: false
                    }
                };
            }
        }
        return {};
    }
);

export default IssuesPage;
