import { Entity } from "../../../shared/domain/Entity";

export interface ICreateUserDTO {
  name: string;
  email: string;
  scrap: string;
}

export class User extends Entity {
  name!: string;

  email!: string;

  scrap!: string;

  public static create(data: ICreateUserDTO): User {
    return Object.assign(new User(), data);
  }
}