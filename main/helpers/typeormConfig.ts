import { DataSource } from "typeorm";
import Item from "../entities/Item.entity";
import History from "../entities/history.entity";
import ItemPrice from "../entities/itemPrice.entity";
import HistoryHasItem from "../entities/historyHasItem.entity";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "possa",
  synchronize: true,
  logging: true,
  entities: [Item, History, ItemPrice, HistoryHasItem],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;
