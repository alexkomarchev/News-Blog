export interface IResponseUser {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    token:string;
}

export type Auth = Partial<Pick<IResponseUser, 'email' | 'password' | 'name'>>


export type User = {
    email: string,
    name: string
}


export interface IPost {
    id?: number,
    title: string,
    body: string,
    author: string,
    createdAt: string,
    updatedAt?: string
}

export type PostCreate = Pick<IPost, "title" | "body" | "author">



