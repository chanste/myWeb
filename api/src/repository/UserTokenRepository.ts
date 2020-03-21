//module
import { EntityRepository, Repository } from "typeorm";
import { randomBytes } from "crypto";

//entity
import { UserToken } from "../entity/UserToken";
import { User } from "../entity/User";

@EntityRepository(UserToken)
export class UserTokenRepository extends Repository<UserToken> {
  createAndSave(user: User) {
    const refreshToken = randomBytes(40).toString("hex");
    const userToken = new UserToken();

    userToken.user = user;
    userToken.refreshtoken = refreshToken;

    return this.save(userToken);
  }

  async updateRefreshToken(userToken: UserToken) {
    const refreshToken = randomBytes(40).toString("hex");
    await this.update({ id: userToken.id }, { refreshtoken: refreshToken });
    return refreshToken; //as response
  }
}
