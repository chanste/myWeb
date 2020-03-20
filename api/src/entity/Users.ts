import { Entity, Column, Index } from "typeorm";
import { Common } from "./Common";

@Entity()
export class Users extends Common {
  @Index({ unique: true })
  @Column("varchar", { length: 20, comment: "ID" })
  userName: string;

  @Column("varchar", { comment: "Password" })
  passWord: string;
}
