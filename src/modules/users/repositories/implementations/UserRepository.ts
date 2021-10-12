import { User } from ".prisma/client";
import { prisma } from "../../../../shared/infra/database/prisma";
import { ICreateUserDTO } from "../../domain/User";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
  async create(data: ICreateUserDTO): Promise<User> {
    return prisma.user.create({ data });
  }

  async find(): Promise<User[]> {
    return prisma.user.findMany();
  }

  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({where: {id}});
  }
}