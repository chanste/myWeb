import { Entity, Column, Index, BeforeInsert, OneToMany } from "typeorm";
import { Common } from "./Common";
import bcrypt from "bcrypt";
import { UserToken } from "./UserToken";

@Entity()
export class User extends Common {
  @Index({ unique: true })
  @Column("varchar", { length: 20, comment: "ID" })
  username: string;

  @Column("varchar", { comment: "Password" })
  password: string;

  //relations====================================
  @OneToMany(
    type => UserToken,
    userToken => userToken.user,
    { cascade: true }
  )
  userTokens: UserToken[];

  //hash password before insert
  @BeforeInsert()
  static encryptPassword(password: string) {
    return bcrypt.hash(password, 5);
  }

  comparePassword(password: string) {
    return bcrypt.compare(password, this.password);
  }

  async saveEncryptedPassword() {
    this.password = await User.encryptPassword(this.password);
  }
}
