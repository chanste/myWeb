import {
  EntityRepository,
  Repository,
  Not,
  getCustomRepository
} from "typeorm";

import { Users } from "../entity/Users";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
  findByUserName(username: string) {
    return this.findOne({ username });
  }
}
