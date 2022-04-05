import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';

const octokit = new Octokit();

/*
    'get' prefix used instead of 'fetch' to differentiate the fact that
    this is from a service instead of a thunk action
 */

export const getIssues = async ({
    owner,
    repository
}: {
    owner: string;
    repository: string;
}) =>
    await octokit.request('GET /repos/{owner}/{repository}/issues', {
        owner,
        repository
    });

export const getClosedIssuesCount = async ({
    owner,
    repository
}: {
    owner: string;
    repository: string;
}) =>
    (await octokit.request(
        `GET /search/issues?q=repo:{owner}/{repository}+type:{type}+state:{state}&per_page={perPage}`,
        {
            owner,
            repository,
            type: 'issues',
            state: 'closed',
            perPage: 1
        }
    )) as Endpoints['GET /search/issues']['response'];
