import { contextBridge } from "electron";
import ItemService from "./services/item.service";

contextBridge.exposeInMainWorld("services", {
  item: {
    find: async () => await ItemService.Find(),
    create: async (barcode) => await ItemService.Create(barcode),
  },
});
