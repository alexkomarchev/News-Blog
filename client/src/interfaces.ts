export interface IUser {
    email: string;
    name: string;

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


    export interface DataValues {
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }

    export interface PreviousDataValues {
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }

    export interface Changed {
    }

    export interface Options {
        isNewRecord: boolean;
        _schema?: any;
        _schemaDelimiter: string;
        raw: boolean;
        attributes: string[];
    }

    export interface ILogin {
        dataValues: DataValues;
        _previousDataValues: PreviousDataValues;
        uniqno: number;
        _changed: Changed;
        _options: Options;
        isNewRecord: boolean;
        token: string;
    }
