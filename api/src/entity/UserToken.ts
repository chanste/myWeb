import { Entity, Column, Index, BeforeInsert, ManyToOne } from "typeorm";
import { Common } from "./Common";
import { User } from "./User";

@Entity()
export class UserToken extends Common {
  @Column({ comment: "Refresh Token" })
  refreshtoken: string;

  //relation=========================
  @ManyToOne(
    type => User,
    user => user.id
  )
  user: User;
}
