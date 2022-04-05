import { Octokit } from '@octokit/core';

const octokit = new Octokit();

export const getRepos = async ({ org, repo }: { org: string; repo: string }) =>
    await octokit.request('GET /orgs/{org}/{repo}', { org, repo });
