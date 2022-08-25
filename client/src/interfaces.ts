export interface IUser {
    email: string | null;
    name: string | null;

}

export interface IPost {
    id?: number,
    title: string,
    body: string,
    author: string,
    createdAt: string,
    updatedAt?: string
}