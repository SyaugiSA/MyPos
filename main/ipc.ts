import { ipcMain } from "electron";
import ItemService from "./services/item.service";

ipcMain.handle("itemFind", async (e, ...args) => await ItemService.Find());
ipcMain.handle(
  "itemCreate",
  async (e, barcode) => await ItemService.Create(barcode)
);

export default ipcMain;
