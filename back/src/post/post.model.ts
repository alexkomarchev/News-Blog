import { Column, DataType, Model, Table } from "sequelize-typescript";


interface IPostCreate {
  title:string,
  body:string,
  author:string,
}

@Table({ tableName: "posts" })
export class Post extends Model<Post,IPostCreate > {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, primaryKey: true,allowNull:true })
  title: string;

  @Column({ type: DataType.STRING, primaryKey: true, allowNull:true })
  body: string;

  @Column({ type: DataType.STRING, primaryKey: true, allowNull:true })
  author: string;
}