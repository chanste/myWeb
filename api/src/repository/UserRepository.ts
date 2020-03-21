import {
  EntityRepository,
  Repository,
  Not,
  getCustomRepository
} from "typeorm";

import { User } from "../entity/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByUserName(username: string) {
    return this.findOne({ username });
  }
}
