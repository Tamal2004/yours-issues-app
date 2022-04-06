import { Endpoints } from '@octokit/types';

export const mockedRepositoryNotFoundParameters = {
    owner: 'tamal2004',
    repository: 'aosrtnestoaetnaoirsetn'
};

export const mockedRepositoryNotFoundUrl = `https://api.github.com/repos/${mockedRepositoryNotFoundParameters.owner}/${mockedRepositoryNotFoundParameters.repository}`;

export const mockedRepositoryWithNoIssuesParameters = {
    owner: 'tamal2004',
    repository: 'radio-widget'
};

export const mockedRepositoryWithNoIssuesUrl = `https://api.github.com/repos/${mockedRepositoryWithNoIssuesParameters.owner}/${mockedRepositoryWithNoIssuesParameters.repository}`;
// @ts-ignore
export const mockedRepositoryWithNoIssues: Endpoints['GET /repos/{owner}/{repo}']['response'] =
    {
        status: 200,
        data: {
            id: 456129080,
            node_id: 'R_kgDOGy_6OA',
            name: 'radio-widget',
            full_name: 'Tamal2004/radio-widget',
            private: false,
            owner: {
                login: 'Tamal2004',
                id: 23403881,
                node_id: 'MDQ6VXNlcjIzNDAzODgx',
                avatar_url:
                    'https://avatars.githubusercontent.com/u/23403881?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/Tamal2004',
                html_url: 'https://github.com/Tamal2004',
                followers_url:
                    'https://api.github.com/users/Tamal2004/followers',
                following_url:
                    'https://api.github.com/users/Tamal2004/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/Tamal2004/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/Tamal2004/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/Tamal2004/subscriptions',
                organizations_url:
                    'https://api.github.com/users/Tamal2004/orgs',
                repos_url: 'https://api.github.com/users/Tamal2004/repos',
                events_url:
                    'https://api.github.com/users/Tamal2004/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/Tamal2004/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/Tamal2004/radio-widget',
            description:
                'A sample radio-widget with Redux Saga, CSS Modules & Unit Testing',
            fork: false,
            url: 'https://api.github.com/repos/Tamal2004/radio-widget',
            forks_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/forks',
            keys_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/teams',
            hooks_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/hooks',
            issue_events_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/events',
            assignees_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/tags',
            blobs_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/languages',
            stargazers_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/stargazers',
            contributors_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/contributors',
            subscribers_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/subscribers',
            subscription_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/subscription',
            commits_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/merges',
            archive_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/downloads',
            issues_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/labels{/name}',
            releases_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/Tamal2004/radio-widget/deployments',
            created_at: '2022-02-06T11:18:17Z',
            updated_at: '2022-02-06T11:18:50Z',
            pushed_at: '2022-02-06T18:15:34Z',
            git_url: 'git://github.com/Tamal2004/radio-widget.git',
            ssh_url: 'git@github.com:Tamal2004/radio-widget.git',
            clone_url: 'https://github.com/Tamal2004/radio-widget.git',
            svn_url: 'https://github.com/Tamal2004/radio-widget',
            homepage: null,
            size: 690,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'TypeScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: 'public',
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'main',
            temp_clone_token: null,
            network_count: 0,
            subscribers_count: 1
        }
    };

export const mockedRepositoryParameters = {
    owner: 'genymobile',
    repository: 'scrcpy'
};

export const mockedRepositoryUrl = `https://api.github.com/repos/${mockedRepositoryParameters.owner}/${mockedRepositoryParameters.repository}`;
// @ts-ignore
export const mockedRepository: Endpoints['GET /repos/{owner}/{repo}']['response'] =
    {
        status: 200,
        data: {
            id: 111583593,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMTE1ODM1OTM=',
            name: 'scrcpy',
            full_name: 'Genymobile/scrcpy',
            private: false,
            owner: {
                login: 'Genymobile',
                id: 3427627,
                node_id: 'MDEyOk9yZ2FuaXphdGlvbjM0Mjc2Mjc=',
                avatar_url:
                    'https://avatars.githubusercontent.com/u/3427627?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/Genymobile',
                html_url: 'https://github.com/Genymobile',
                followers_url:
                    'https://api.github.com/users/Genymobile/followers',
                following_url:
                    'https://api.github.com/users/Genymobile/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/Genymobile/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/Genymobile/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/Genymobile/subscriptions',
                organizations_url:
                    'https://api.github.com/users/Genymobile/orgs',
                repos_url: 'https://api.github.com/users/Genymobile/repos',
                events_url:
                    'https://api.github.com/users/Genymobile/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/Genymobile/received_events',
                type: 'Organization',
                site_admin: false
            },
            html_url: 'https://github.com/Genymobile/scrcpy',
            description: 'Display and control your Android device',
            fork: false,
            url: 'https://api.github.com/repos/Genymobile/scrcpy',
            forks_url: 'https://api.github.com/repos/Genymobile/scrcpy/forks',
            keys_url:
                'https://api.github.com/repos/Genymobile/scrcpy/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/Genymobile/scrcpy/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/Genymobile/scrcpy/teams',
            hooks_url: 'https://api.github.com/repos/Genymobile/scrcpy/hooks',
            issue_events_url:
                'https://api.github.com/repos/Genymobile/scrcpy/issues/events{/number}',
            events_url: 'https://api.github.com/repos/Genymobile/scrcpy/events',
            assignees_url:
                'https://api.github.com/repos/Genymobile/scrcpy/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/Genymobile/scrcpy/branches{/branch}',
            tags_url: 'https://api.github.com/repos/Genymobile/scrcpy/tags',
            blobs_url:
                'https://api.github.com/repos/Genymobile/scrcpy/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/Genymobile/scrcpy/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/Genymobile/scrcpy/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/Genymobile/scrcpy/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/Genymobile/scrcpy/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/Genymobile/scrcpy/languages',
            stargazers_url:
                'https://api.github.com/repos/Genymobile/scrcpy/stargazers',
            contributors_url:
                'https://api.github.com/repos/Genymobile/scrcpy/contributors',
            subscribers_url:
                'https://api.github.com/repos/Genymobile/scrcpy/subscribers',
            subscription_url:
                'https://api.github.com/repos/Genymobile/scrcpy/subscription',
            commits_url:
                'https://api.github.com/repos/Genymobile/scrcpy/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/Genymobile/scrcpy/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/Genymobile/scrcpy/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/Genymobile/scrcpy/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/Genymobile/scrcpy/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/Genymobile/scrcpy/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/Genymobile/scrcpy/merges',
            archive_url:
                'https://api.github.com/repos/Genymobile/scrcpy/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/Genymobile/scrcpy/downloads',
            issues_url:
                'https://api.github.com/repos/Genymobile/scrcpy/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/Genymobile/scrcpy/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/Genymobile/scrcpy/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/Genymobile/scrcpy/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/Genymobile/scrcpy/labels{/name}',
            releases_url:
                'https://api.github.com/repos/Genymobile/scrcpy/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/Genymobile/scrcpy/deployments',
            created_at: '2017-11-21T18:00:27Z',
            updated_at: '2022-04-06T08:21:15Z',
            pushed_at: '2022-04-02T07:16:53Z',
            git_url: 'git://github.com/Genymobile/scrcpy.git',
            ssh_url: 'git@github.com:Genymobile/scrcpy.git',
            clone_url: 'https://github.com/Genymobile/scrcpy.git',
            svn_url: 'https://github.com/Genymobile/scrcpy',
            homepage: '',
            size: 3636,
            stargazers_count: 63511,
            watchers_count: 63511,
            language: 'C',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 6817,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 978,
            license: {
                key: 'apache-2.0',
                name: 'Apache License 2.0',
                spdx_id: 'Apache-2.0',
                url: 'https://api.github.com/licenses/apache-2.0',
                node_id: 'MDc6TGljZW5zZTI='
            },
            allow_forking: true,
            is_template: false,
            topics: [
                'android',
                'c',
                'ffmpeg',
                'libav',
                'mirroring',
                'recording',
                'screen',
                'sdl2'
            ],
            visibility: 'public',
            forks: 6817,
            open_issues: 978,
            watchers: 63511,
            default_branch: 'master',
            temp_clone_token: null,
            organization: {
                login: 'Genymobile',
                id: 3427627,
                node_id: 'MDEyOk9yZ2FuaXphdGlvbjM0Mjc2Mjc=',
                avatar_url:
                    'https://avatars.githubusercontent.com/u/3427627?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/Genymobile',
                html_url: 'https://github.com/Genymobile',
                followers_url:
                    'https://api.github.com/users/Genymobile/followers',
                following_url:
                    'https://api.github.com/users/Genymobile/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/Genymobile/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/Genymobile/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/Genymobile/subscriptions',
                organizations_url:
                    'https://api.github.com/users/Genymobile/orgs',
                repos_url: 'https://api.github.com/users/Genymobile/repos',
                events_url:
                    'https://api.github.com/users/Genymobile/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/Genymobile/received_events',
                type: 'Organization',
                site_admin: false
            },
            network_count: 6817,
            subscribers_count: 1017
        }
    };
