import { Column, DataType, Model, Table } from "sequelize-typescript";


interface IUserCreate {
  email:string,
  name:string,
  password:string,
}

@Table({ tableName: "users" })
export class User extends Model<User,IUserCreate > {
  @Column({ type: DataType.STRING, unique: true, primaryKey: true,allowNull:true })
  email: string;

  @Column({ type: DataType.STRING, primaryKey: true,allowNull:true })
  name: string;

  @Column({ type: DataType.STRING, primaryKey: true, allowNull:true })
  password: string;
}