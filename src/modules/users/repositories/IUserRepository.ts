import { ICreateUserDTO, User } from "../domain/User";

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | null>;
  find(): Promise<User[]>;
}