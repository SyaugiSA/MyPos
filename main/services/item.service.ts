import Item from "../entities/Item.entity";
import AppDataSource from "../helpers/typeormConfig";

const ItemRepository = AppDataSource.getRepository(Item);

const Find = async () => {
  const data = await ItemRepository.find({ relations: { prices: true } });

  if (data) return { message: "Data found", data };

  return { message: "Datanot found" };
};

const Create = async (data: Item) => {
  let message: string;

  ItemRepository.save(data)
    .then((res) => {
      message = "created";
      console.log(res);
    })
    .catch((err) => {
      message = "errpr";
      console.log(err);
    });

  return { message };
};

const ItemService = { Find, Create };
export default ItemService;
