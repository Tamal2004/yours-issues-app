import { rest } from 'msw';

import {
    mockedRepositoryNotFoundUrl,
    mockedRepositoryWithNoIssuesUrl,
    mockedRepositoryWithNoIssues,
    mockedRepositoryUrl,
    mockedRepository
} from 'services/__mocks__/repositoriesApiMocks';

import {
    mockedClosedIssuesCountUrl,
    mockedClosedIssuesCount,
    mockedGetOpenIssuesUrl,
    mockedGetOpenIssues,
    mockedGetClosedIssuesUrl,
    mockedGetClosedIssues
} from 'services/__mocks__/issuesApiMocks';

const handlers = [
    rest.get(mockedRepositoryNotFoundUrl, (_req, res, ctx) => {
        return res(ctx.status(403), ctx.delay(150));
    }),
    rest.get(mockedRepositoryWithNoIssuesUrl, (_req, res, ctx) => {
        return res(ctx.json(mockedRepositoryWithNoIssues), ctx.delay(150));
    }),
    rest.get(mockedRepositoryUrl, (_req, res, ctx) => {
        return res(ctx.json(mockedRepository), ctx.delay(150));
    }),
    rest.get(mockedClosedIssuesCountUrl, (_req, res, ctx) => {
        return res(ctx.json(mockedClosedIssuesCount), ctx.delay(150));
    }),
    rest.get(mockedGetOpenIssuesUrl, (_req, res, ctx) => {
        return res(ctx.json(mockedGetOpenIssues), ctx.delay(150));
    }),
    rest.get(mockedGetClosedIssuesUrl, (_req, res, ctx) => {
        return res(ctx.json(mockedGetClosedIssues), ctx.delay(150));
    })
];

export { handlers };
