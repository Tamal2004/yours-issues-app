import { Endpoints } from '@octokit/types';

export const mockedClosedIssuesCountParameters = {
    owner: 'genymobile',
    repository: 'scrcpy'
};

export const mockedClosedIssuesCountUrl = `https://api.github.com/search/issues?q=repo:${mockedClosedIssuesCountParameters.owner}/${mockedClosedIssuesCountParameters.repository}+type:issues+state:closed&per_page=1`;
// @ts-ignore
export const mockedClosedIssuesCount: Endpoints['GET /search/issues']['response'] =
    {
        status: 200,
        data: {
            total_count: 1889,
            incomplete_results: false,
            items: [
                {
                    url: 'https://api.github.com/repos/Genymobile/scrcpy/issues/3169',
                    repository_url:
                        'https://api.github.com/repos/Genymobile/scrcpy',
                    labels_url:
                        'https://api.github.com/repos/Genymobile/scrcpy/issues/3169/labels{/name}',
                    comments_url:
                        'https://api.github.com/repos/Genymobile/scrcpy/issues/3169/comments',
                    events_url:
                        'https://api.github.com/repos/Genymobile/scrcpy/issues/3169/events',
                    html_url:
                        'https://github.com/Genymobile/scrcpy/issues/3169',
                    id: 1193432339,
                    node_id: 'I_kwDOBqahac5HIlUT',
                    number: 3169,
                    title: 'Problem with frame counter',
                    user: {
                        login: 'Xionghaizi001',
                        id: 50747104,
                        node_id: 'MDQ6VXNlcjUwNzQ3MTA0',
                        avatar_url:
                            'https://avatars.githubusercontent.com/u/50747104?v=4',
                        gravatar_id: '',
                        url: 'https://api.github.com/users/Xionghaizi001',
                        html_url: 'https://github.com/Xionghaizi001',
                        followers_url:
                            'https://api.github.com/users/Xionghaizi001/followers',
                        following_url:
                            'https://api.github.com/users/Xionghaizi001/following{/other_user}',
                        gists_url:
                            'https://api.github.com/users/Xionghaizi001/gists{/gist_id}',
                        starred_url:
                            'https://api.github.com/users/Xionghaizi001/starred{/owner}{/repo}',
                        subscriptions_url:
                            'https://api.github.com/users/Xionghaizi001/subscriptions',
                        organizations_url:
                            'https://api.github.com/users/Xionghaizi001/orgs',
                        repos_url:
                            'https://api.github.com/users/Xionghaizi001/repos',
                        events_url:
                            'https://api.github.com/users/Xionghaizi001/events{/privacy}',
                        received_events_url:
                            'https://api.github.com/users/Xionghaizi001/received_events',
                        type: 'User',
                        site_admin: false
                    },
                    labels: [],
                    state: 'closed',
                    locked: false,
                    assignee: null,
                    assignees: [],
                    milestone: null,
                    comments: 1,
                    created_at: '2022-04-05T16:27:29Z',
                    updated_at: '2022-04-05T16:29:44Z',
                    closed_at: '2022-04-05T16:28:38Z',
                    author_association: 'NONE',
                    active_lock_reason: null,
                    body: " - [√] I have read the [FAQ](https://github.com/Genymobile/scrcpy/blob/master/FAQ.md).\r\n - [√] I have searched in existing [issues](https://github.com/Genymobile/scrcpy/issues).\r\n\r\n**Environment**\r\n - OS: Windows 10 21H2 19044.1586\r\n - scrcpy version: 1.22\r\n - installation method: Win release\r\n - device model: Meizu 18 Pro\r\n - Android version: 11\r\n\r\n**Describe the bug**\r\n\r\n(I'm not sure if anyone has reported this problem)\r\nWhen use Alt+I to open frame counter, it will freeze and stop.\r\n",
                    reactions: {
                        'url': 'https://api.github.com/repos/Genymobile/scrcpy/issues/3169/reactions',
                        'total_count': 0,
                        '+1': 0,
                        '-1': 0,
                        'laugh': 0,
                        'hooray': 0,
                        'confused': 0,
                        'heart': 0,
                        'rocket': 0,
                        'eyes': 0
                    },
                    timeline_url:
                        'https://api.github.com/repos/Genymobile/scrcpy/issues/3169/timeline',
                    performed_via_github_app: null,
                    score: 1
                }
            ]
        }
    };

export const mockedGetIssuesParameters = {
    owner: 'genymobile',
    repository: 'scrcpy'
};

const mockOpenIssue = {
    url: 'https://api.github.com/repos/Genymobile/scrcpy/issues/3168',
    repository_url: 'https://api.github.com/repos/Genymobile/scrcpy',
    labels_url:
        'https://api.github.com/repos/Genymobile/scrcpy/issues/3168/labels{/name}',
    comments_url:
        'https://api.github.com/repos/Genymobile/scrcpy/issues/3168/comments',
    events_url:
        'https://api.github.com/repos/Genymobile/scrcpy/issues/3168/events',
    html_url: 'https://github.com/Genymobile/scrcpy/issues/3168',
    id: 1193129605,
    node_id: 'I_kwDOBqahac5HHbaF',
    number: 3168,
    title: 'How to disable Tab key when pressing Alt + Tab in Ubuntu',
    user: {
        login: 'adicandra1',
        id: 38586478,
        node_id: 'MDQ6VXNlcjM4NTg2NDc4',
        avatar_url: 'https://avatars.githubusercontent.com/u/38586478?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/adicandra1',
        html_url: 'https://github.com/adicandra1',
        followers_url: 'https://api.github.com/users/adicandra1/followers',
        following_url:
            'https://api.github.com/users/adicandra1/following{/other_user}',
        gists_url: 'https://api.github.com/users/adicandra1/gists{/gist_id}',
        starred_url:
            'https://api.github.com/users/adicandra1/starred{/owner}{/repo}',
        subscriptions_url:
            'https://api.github.com/users/adicandra1/subscriptions',
        organizations_url: 'https://api.github.com/users/adicandra1/orgs',
        repos_url: 'https://api.github.com/users/adicandra1/repos',
        events_url: 'https://api.github.com/users/adicandra1/events{/privacy}',
        received_events_url:
            'https://api.github.com/users/adicandra1/received_events',
        type: 'User',
        site_admin: false
    },
    labels: [],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 1,
    created_at: '2022-04-05T13:09:41Z',
    updated_at: '2022-04-05T15:34:06Z',
    closed_at: null,
    author_association: 'NONE',
    active_lock_reason: null,
    body: ' - [x] I have read the [FAQ](https://github.com/Genymobile/scrcpy/blob/master/FAQ.md).\r\n - [x] I have searched in existing [issues](https://github.com/Genymobile/scrcpy/issues).\r\n\r\n**Environment**\r\n - OS: Ubuntu 20.04\r\n - scrcpy version: 1.23\r\n - installation method: manual build\r\n - device model: Maxtron Genio 10\r\n - Android version: 9\r\n\r\n**Describe the bug**\r\nWhen I press Alt+Tab key on scrcpy , the actual Tab key is also triggered (e.g. triggering browser navigation by Tab key). This is frustrating, because sometimes when browsing in internet, the Tab key makes the browser scroll to top of the page to focus on the first content.\r\n\r\nIs there a way to disable Tab key when pressing Alt+Tab ?\r\n\r\nThanks in advance',
    reactions: {
        'url': 'https://api.github.com/repos/Genymobile/scrcpy/issues/3168/reactions',
        'total_count': 0,
        '+1': 0,
        '-1': 0,
        'laugh': 0,
        'hooray': 0,
        'confused': 0,
        'heart': 0,
        'rocket': 0,
        'eyes': 0
    },
    timeline_url:
        'https://api.github.com/repos/Genymobile/scrcpy/issues/3168/timeline',
    performed_via_github_app: null
};

export const mockedGetOpenIssuesUrl = `https://api.github.com/repos/${mockedGetIssuesParameters.owner}/${mockedGetIssuesParameters.repository}/issues?state=open&page=1&per_page=20`;
export const mockedGetOpenIssues: Endpoints['GET /repos/{owner}/{repo}/issues']['response'] =
    {
        status: 200,
        // @ts-ignore
        data: [...Array(20)].map((index) => ({
            ...mockOpenIssue,
            id: mockOpenIssue.id + index,
            number: mockOpenIssue.number + index
        }))
    };

const mockClosedIssue = {
    url: 'https://api.github.com/repos/Genymobile/scrcpy/issues/3169',
    repository_url: 'https://api.github.com/repos/Genymobile/scrcpy',
    labels_url:
        'https://api.github.com/repos/Genymobile/scrcpy/issues/3169/labels{/name}',
    comments_url:
        'https://api.github.com/repos/Genymobile/scrcpy/issues/3169/comments',
    events_url:
        'https://api.github.com/repos/Genymobile/scrcpy/issues/3169/events',
    html_url: 'https://github.com/Genymobile/scrcpy/issues/3169',
    id: 1193432339,
    node_id: 'I_kwDOBqahac5HIlUT',
    number: 3169,
    title: 'Problem with frame counter',
    user: {
        login: 'Xionghaizi001',
        id: 50747104,
        node_id: 'MDQ6VXNlcjUwNzQ3MTA0',
        avatar_url: 'https://avatars.githubusercontent.com/u/50747104?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Xionghaizi001',
        html_url: 'https://github.com/Xionghaizi001',
        followers_url: 'https://api.github.com/users/Xionghaizi001/followers',
        following_url:
            'https://api.github.com/users/Xionghaizi001/following{/other_user}',
        gists_url: 'https://api.github.com/users/Xionghaizi001/gists{/gist_id}',
        starred_url:
            'https://api.github.com/users/Xionghaizi001/starred{/owner}{/repo}',
        subscriptions_url:
            'https://api.github.com/users/Xionghaizi001/subscriptions',
        organizations_url: 'https://api.github.com/users/Xionghaizi001/orgs',
        repos_url: 'https://api.github.com/users/Xionghaizi001/repos',
        events_url:
            'https://api.github.com/users/Xionghaizi001/events{/privacy}',
        received_events_url:
            'https://api.github.com/users/Xionghaizi001/received_events',
        type: 'User',
        site_admin: false
    },
    labels: [],
    state: 'closed',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 1,
    created_at: '2022-04-05T16:27:29Z',
    updated_at: '2022-04-05T16:29:44Z',
    closed_at: '2022-04-05T16:28:38Z',
    author_association: 'NONE',
    active_lock_reason: null,
    body: " - [√] I have read the [FAQ](https://github.com/Genymobile/scrcpy/blob/master/FAQ.md).\r\n - [√] I have searched in existing [issues](https://github.com/Genymobile/scrcpy/issues).\r\n\r\n**Environment**\r\n - OS: Windows 10 21H2 19044.1586\r\n - scrcpy version: 1.22\r\n - installation method: Win release\r\n - device model: Meizu 18 Pro\r\n - Android version: 11\r\n\r\n**Describe the bug**\r\n\r\n(I'm not sure if anyone has reported this problem)\r\nWhen use Alt+I to open frame counter, it will freeze and stop.\r\n",
    reactions: {
        'url': 'https://api.github.com/repos/Genymobile/scrcpy/issues/3169/reactions',
        'total_count': 0,
        '+1': 0,
        '-1': 0,
        'laugh': 0,
        'hooray': 0,
        'confused': 0,
        'heart': 0,
        'rocket': 0,
        'eyes': 0
    },
    timeline_url:
        'https://api.github.com/repos/Genymobile/scrcpy/issues/3169/timeline',
    performed_via_github_app: null
};

export const mockedGetClosedIssuesUrl = `https://api.github.com/repos/${mockedGetIssuesParameters.owner}/${mockedGetIssuesParameters.repository}/issues?state=closed&page=1&per_page=20`;
export const mockedGetClosedIssues: Endpoints['GET /repos/{owner}/{repo}/issues']['response'] =
    {
        status: 200,
        // @ts-ignore
        data: [...Array(20)].map((index) => ({
            ...mockClosedIssue,
            id: mockClosedIssue.id + index,
            number: mockClosedIssue.number + index
        }))
    };
