import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";

@Entity()
export class Common {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ comment: "Interttime" })
  createdAt: string;

  @Column({ comment: "Updatetime" })
  updatedAt: string;
}
