import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';

const octokit = new Octokit();

/*
    'get' prefix used instead of 'fetch' to differentiate the fact that
    this is from a service instead of a thunk action
 */

export const getRepository = async ({
    owner,
    repository
}: {
    owner: string;
    repository: string;
}) =>
    (await octokit.request('GET /repos/{owner}/{repository}', {
        owner,
        repository
    })) as Endpoints['GET /repos/{owner}/{repo}']['response'];
