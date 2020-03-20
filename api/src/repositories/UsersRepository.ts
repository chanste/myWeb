import { EntityRepository, Repository, Not } from "typeorm";
import { Users } from "../entity/Users";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
  findByUserName(userName: string) {
    return this.findOne({ userName });
  }
}
