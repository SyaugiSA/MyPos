import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import ItemPrice from "./itemPrice.entity";
import HistoryHasItem from "./historyHasItem.entity";

@Entity()
export default class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 16, unique: true })
  barcode: string;

  @Column({ type: "varchar", length: 40 })
  name: string;

  @Column({ type: "int" })
  quantity: number;

  @Column({ type: "varchar", length: 6 })
  unit: string;

  @Column({ type: "bool", default: 1 })
  isActive: number;

  @OneToMany(() => ItemPrice, (itemPrice) => itemPrice.item)
  prices: ItemPrice[];

  @OneToMany(() => HistoryHasItem, (historyHasItem) => historyHasItem.item)
  historyHasItems: HistoryHasItem[];
}
