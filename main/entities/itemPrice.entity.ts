import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Item from "./Item.entity";

@Entity()
export default class ItemPrice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  condition: number;

  @Column({ type: "int" })
  price: number;

  @ManyToOne(() => Item, (item) => item.prices)
  item: Item;
}
