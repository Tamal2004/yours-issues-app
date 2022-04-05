export interface RepositoryAttributes {
    owner: string;
    repository: string;
}

export interface Issue {
    id: number;
    number: number;
    title: string;
    commentsCount: number;
    repositoryUrl: string;
    issueUrl: string;
    createdAt: string;
    userLoginId?: string;
}