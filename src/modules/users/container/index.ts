import { UserRepository } from "../repositories/implementations/UserRepository";
import { container } from 'tsyringe';

import { IUserRepository } from '../repositories/IUserRepository';

export enum USER_REPOSITORY {
  UserRepository = 'UserRepositoruy'
};

container.registerSingleton<IUserRepository>(
  USER_REPOSITORY.UserRepository,
  UserRepository,
);