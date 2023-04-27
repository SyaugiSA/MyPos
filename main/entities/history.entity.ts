import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import HistoryHasItem from "./historyHasItem.entity";

@Entity()
export default class History {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 15, default: () => Date.now().toString() })
  date: string;

  @Column({ type: "int" })
  subTotal: number;

  @Column({ type: "int" })
  tax: number;

  @Column({ type: "int" })
  total: number;

  @ManyToMany(() => HistoryHasItem, (historyHasItem) => historyHasItem.history)
  historyHasItems: HistoryHasItem[];
}
