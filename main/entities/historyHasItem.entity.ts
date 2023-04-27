import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Item from "./Item.entity";
import History from "./history.entity";

@Entity()
export default class HistoryHasItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  itemId: number;

  @Column({ type: "int" })
  historyId: number;

  @Column({ type: "int" })
  quantity: number;

  @Column({ type: "int" })
  price: number;

  @ManyToOne(() => Item, (item) => item.historyHasItems)
  item: Item;

  @ManyToOne(() => History, (history) => history.historyHasItems)
  history: History;
}
