import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";

import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    driver_license,
    password,
    avatar,
    id
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
      avatar,
      id
    });

    await this.repository.save(user);
  }

  async list(): Promise<User[]> {
    return await this.repository.find();
  }

  async findByName(name: string): Promise<User> {
    return await this.repository.findOne({ name });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({ email });
  }

  async findById(id: string): Promise<User> {
    return await this.repository.findOne({ id });
  }
  
}

export { UsersRepository };
