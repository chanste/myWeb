import { Entity, Column, Index, BeforeInsert } from "typeorm";
import { Common } from "./Common";
import bcrypt from "bcrypt";

@Entity()
export class Users extends Common {
  @Index({ unique: true })
  @Column("varchar", { length: 20, comment: "ID" })
  username: string;

  @Column("varchar", { comment: "Password" })
  password: string;

  //hash password before insert
  @BeforeInsert()
  static encryptPassword(password: string) {
    return bcrypt.hash(password, 5);
  }

  comparePassword(password: string) {
    return bcrypt.compare(password, this.password);
  }

  async saveEncryptedPassword() {
    this.password = await Users.encryptPassword(this.password);
  }
}
