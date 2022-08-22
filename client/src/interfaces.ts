export interface IUser {
    email?: string | null,
    token: string | null,
    id: string | null,
}

export interface IPost {
    id?: number,
    title: string,
    body: string,
    author: string,
    createdAt: string,
    updatedAt?: string
}