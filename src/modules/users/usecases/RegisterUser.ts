import { inject, injectable } from "tsyringe";
import { USER_REPOSITORY } from "../container";
import { ICreateUserDTO } from "../domain/User";
import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
export class RegisterUser {
  constructor(
    @inject(USER_REPOSITORY.UserRepository)
    private readonly usersRepository: IUserRepository,
  ) {}
  
  async execute(data: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create(data);
  }
}