
import { User } from "../../infra/typeorm/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async findByName(name: string): Promise<User> {
    const user = this.users.find((c) => c.name === name);
    return user;
  }

  async list(): Promise<User[]> {
    return this.users;
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((c) => c.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((c) => c.id === id);
  }

  async create({
    name,
    email,
    driver_license,
    password,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      driver_license,
      password,
      avatar,
      id,
    });

    this.users.push(user);
  }
}

export { UsersRepositoryInMemory };
