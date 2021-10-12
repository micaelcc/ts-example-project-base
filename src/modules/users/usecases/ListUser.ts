import { User } from "../domain/User";
import { inject, injectable } from "tsyringe";
import { USER_REPOSITORY } from "../container";
import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
export class ListUser {
  constructor(
    @inject(USER_REPOSITORY.UserRepository)
    private readonly usersRepository: IUserRepository,
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.find();

    return users;
  }
}