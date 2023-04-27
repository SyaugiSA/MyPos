import {
  Box,
  Button,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import HomeLayout from "./../../layouts/HomeLayout";
import { Add, ArrowForwardIos } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { itemType } from "../../types/itemType";
import { ipcRenderer } from "electron";

const modalStyle = {
  width: 500,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  height: 500,
  overflowY: "auto",
};
const fromStyle = { width: 200 };
const fromGroupStyle = {
  display: "flex",
  justifyContent: "space-between",
  m: 2,
};

const useItem = [
  {
    barcode: "123",
    name: "abc",
    qty: 10,
    sellPrice1: 10000,
    sellPrice2: 10000,
    sellPrice3: 10000,
    sellPrice4: 10000,
    sellPrice5: 10000,
    sellCondition2: 10,
    sellCondition3: 20,
    sellCondition4: 30,
    sellCondition5: 40,
    getPrice: 8000,
    isActive: true,
    unit: "pcs",
  },
  {
    barcode: "abc",
    name: "123",
    qty: 10,
    sellPrice1: 10000,
    sellPrice2: 10000,
    sellPrice3: 10000,
    sellPrice4: 10000,
    sellPrice5: 10000,
    sellCondition2: 10,
    sellCondition3: 20,
    sellCondition4: 30,
    sellCondition5: 40,
    getPrice: 8000,
    isActive: true,
    unit: "pcs",
  },
  {
    barcode: "def",
    name: "456",
    qty: 10,
    sellPrice1: 10000,
    sellPrice2: 10000,
    sellPrice3: 10000,
    sellPrice4: 10000,
    sellPrice5: 10000,
    sellCondition2: 10,
    sellCondition3: 20,
    sellCondition4: 30,
    sellCondition5: 40,
    getPrice: 8000,
    isActive: true,
    unit: "pcs",
  },
  {
    barcode: "456",
    name: "def",
    qty: 10,
    sellPrice1: 10000,
    sellPrice2: 10000,
    sellPrice3: 10000,
    sellPrice4: 10000,
    sellPrice5: 10000,
    sellCondition2: 10,
    sellCondition3: 20,
    sellCondition4: 30,
    sellCondition5: 40,
    getPrice: 8000,
    isActive: true,
    unit: "pcs",
  },
  {
    barcode: "a1",
    name: "b2",
    qty: 10,
    sellPrice1: 10000,
    sellPrice2: 10000,
    sellPrice3: 10000,
    sellPrice4: 10000,
    sellPrice5: 10000,
    sellCondition2: 10,
    sellCondition3: 20,
    sellCondition4: 30,
    sellCondition5: 40,
    getPrice: 8000,
    isActive: true,
    unit: "pcs",
  },
  {
    barcode: "c3",
    name: "d4",
    qty: 10,
    sellPrice1: 10000,
    sellPrice2: 10000,
    sellPrice3: 10000,
    sellPrice4: 10000,
    sellPrice5: 10000,
    sellCondition2: 10,
    sellCondition3: 20,
    sellCondition4: 30,
    sellCondition5: 40,
    getPrice: 8000,
    isActive: true,
    unit: "pcs",
  },
  {
    barcode: "123",
    name: "123",
    qty: 10,
    sellPrice1: 10000,
    sellPrice2: 10000,
    sellPrice3: 10000,
    sellPrice4: 10000,
    sellPrice5: 10000,
    sellCondition2: 10,
    sellCondition3: 20,
    sellCondition4: 30,
    sellCondition5: 40,
    getPrice: 8000,
    isActive: true,
    unit: "pcs",
  },
  {
    barcode: "123",
    name: "123",
    qty: 10,
    sellPrice1: 10000,
    sellPrice2: 10000,
    sellPrice3: 10000,
    sellPrice4: 10000,
    sellPrice5: 10000,
    sellCondition2: 10,
    sellCondition3: 20,
    sellCondition4: 30,
    sellCondition5: 40,
    getPrice: 8000,
    isActive: true,
    unit: "pcs",
  },
  {
    barcode: "123",
    name: "123",
    qty: 10,
    sellPrice1: 10000,
    sellPrice2: 10000,
    sellPrice3: 10000,
    sellPrice4: 10000,
    sellPrice5: 10000,
    sellCondition2: 10,
    sellCondition3: 20,
    sellCondition4: 30,
    sellCondition5: 40,
    getPrice: 8000,
    isActive: true,
    unit: "pcs",
  },
  {
    barcode: "123",
    name: "123",
    qty: 10,
    sellPrice1: 10000,
    sellPrice2: 10000,
    sellPrice3: 10000,
    sellPrice4: 10000,
    sellPrice5: 10000,
    sellCondition2: 10,
    sellCondition3: 20,
    sellCondition4: 30,
    sellCondition5: 40,
    getPrice: 8000,
    isActive: true,
    unit: "pcs",
  },
];

const IPC = ipcRenderer;

export default function Items() {
  const [modalOpen, setModalOpen] = useState(false);
  const [items, setItems] = useState<itemType[]>([]);
  const [search, setSearch] = useState("");
  const [modalItem, setModalItem] = useState<itemType>({
    barcode: "",
    name: "",
    qty: 0,
    sellPrice1: 0,
    sellPrice2: 0,
    sellPrice3: 0,
    sellPrice4: 0,
    sellPrice5: 0,
    sellCondition2: 0,
    sellCondition3: 0,
    sellCondition4: 0,
    sellCondition5: 0,
    getPrice: 0,
    isActive: true,
    unit: "",
  });

  const onEdit = (item: any) => {
    setModalOpen(true);
    setModalItem(item);
  };

  const onModalClose = () => {
    setModalItem({
      barcode: "",
      name: "",
      qty: 0,
      sellPrice1: 0,
      sellPrice2: 0,
      sellPrice3: 0,
      sellPrice4: 0,
      sellPrice5: 0,
      sellCondition2: 0,
      sellCondition3: 0,
      sellCondition4: 0,
      sellCondition5: 0,
      getPrice: 0,
      isActive: true,
      unit: "",
    });
    setModalOpen(false);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  const BTN_IN = (key: number) => {
    switch (key) {
      case 6:
        document.getElementById("findInput")?.focus();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    IPC.invoke("itemFind")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    document.addEventListener("keypress", (e) => BTN_IN(e.keyCode));
    setItems(useItem);
  }, []);

  return (
    <HomeLayout title="Items">
      <Modal open={modalOpen} onClose={() => onModalClose()}>
        <Box sx={modalStyle}>
          <Box>
            {!modalItem.barcode ? (
              <Typography variant="h4">Add new Item</Typography>
            ) : (
              <Typography variant="h4">Edit Item</Typography>
            )}
          </Box>

          <Box sx={fromGroupStyle}>
            <TextField
              required
              sx={fromStyle}
              label="Barcode"
              value={modalItem.barcode}
              onChange={(e) =>
                setModalItem((item) => ({ ...item, barcode: e.target.value }))
              }
            />

            <TextField
              required
              sx={fromStyle}
              label="Name"
              value={modalItem.name}
              onChange={(e) =>
                setModalItem((item) => ({ ...item, name: e.target.value }))
              }
            />
          </Box>

          <Box sx={fromGroupStyle}>
            <TextField
              required
              sx={fromStyle}
              label="Qty"
              value={!modalItem.qty ? 0 : modalItem.qty}
              onChange={(e) =>
                setModalItem((item) => ({
                  ...item,
                  qty: parseInt(e.target.value),
                }))
              }
            />

            <TextField
              required
              sx={fromStyle}
              label="Unit"
              value={modalItem.unit}
              onChange={(e) =>
                setModalItem((item) => ({
                  ...item,
                  unit: e.target.value,
                }))
              }
            />
          </Box>

          <Box sx={fromGroupStyle}>
            <TextField
              required
              sx={fromStyle}
              label="Buy Price"
              value={!modalItem.getPrice ? 0 : modalItem.getPrice}
              onChange={(e) =>
                setModalItem((item) => ({
                  ...item,
                  getPrice: parseInt(e.target.value),
                }))
              }
            />

            <TextField
              required
              sx={fromStyle}
              label="Sell Price 1"
              value={!modalItem.sellPrice1 ? 0 : modalItem.sellPrice1}
              onChange={(e) =>
                setModalItem((item) => ({
                  ...item,
                  sellPrice1: parseInt(e.target.value),
                }))
              }
            />
          </Box>

          <Box sx={fromGroupStyle}>
            <TextField
              sx={fromStyle}
              label="Sell Condition 2"
              InputProps={{ startAdornment: <Typography>{">"}</Typography> }}
              value={!modalItem.sellCondition2 ? 0 : modalItem.sellCondition2}
              onChange={(e) =>
                setModalItem((item) => ({
                  ...item,
                  sellCondition2: parseInt(e.target.value),
                }))
              }
            />

            <TextField
              sx={fromStyle}
              label="Sell Price 2"
              value={!modalItem.sellPrice2 ? 0 : modalItem.sellPrice2}
              onChange={(e) =>
                setModalItem((item) => ({
                  ...item,
                  sellPrice2: parseInt(e.target.value),
                }))
              }
            />
          </Box>

          <Box sx={fromGroupStyle}>
            <TextField
              sx={fromStyle}
              label="Sell Condition 3"
              InputProps={{ startAdornment: <Typography>{">"}</Typography> }}
              value={!modalItem.sellCondition3 ? 0 : modalItem.sellCondition3}
              onChange={(e) =>
                setModalItem((item) => ({
                  ...item,
                  sellCondition3: parseInt(e.target.value),
                }))
              }
            />

            <TextField
              sx={fromStyle}
              label="Sell Price 3"
              value={!modalItem.sellPrice3 ? 0 : modalItem.sellPrice3}
              onChange={(e) =>
                setModalItem((item) => ({
                  ...item,
                  sellPrice3: parseInt(e.target.value),
                }))
              }
            />
          </Box>

          <Box sx={fromGroupStyle}>
            <TextField
              sx={fromStyle}
              label="Sell Condition 4"
              InputProps={{ startAdornment: <Typography>{">"}</Typography> }}
              value={!modalItem.sellCondition4 ? 0 : modalItem.sellCondition4}
              onChange={(e) =>
                setModalItem((item) => ({
                  ...item,
                  sellCondition4: parseInt(e.target.value),
                }))
              }
            />

            <TextField
              sx={fromStyle}
              label="Sell Price 4"
              value={!modalItem.sellPrice4 ? 0 : modalItem.sellPrice4}
              onChange={(e) =>
                setModalItem((item) => ({
                  ...item,
                  sellPrice4: parseInt(e.target.value),
                }))
              }
            />
          </Box>

          <Box sx={fromGroupStyle}>
            <TextField
              sx={fromStyle}
              label="Sell Condition 5"
              InputProps={{ startAdornment: <Typography>{">"}</Typography> }}
              value={!modalItem.sellCondition5 ? 0 : modalItem.sellCondition5}
              onChange={(e) =>
                setModalItem((item) => ({
                  ...item,
                  sellCondition5: parseInt(e.target.value),
                }))
              }
            />

            <TextField
              sx={fromStyle}
              label="Sell Price 5"
              value={!modalItem.sellPrice5 ? 0 : modalItem.sellPrice5}
              onChange={(e) =>
                setModalItem((item) => ({
                  ...item,
                  sellPrice5: parseInt(e.target.value),
                }))
              }
            />
          </Box>

          <Box sx={{ ...fromGroupStyle }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => onModalClose()}
            >
              <Typography>Cancel</Typography>
            </Button>

            <Button
              type="submit"
              variant="contained"
              onClick={(e) => onSubmit(e)}
            >
              <Typography>Save</Typography>
            </Button>
          </Box>
        </Box>
      </Modal>

      <Box mx={2} my={1}>
        <Box display="flex" justifyContent="space-between">
          <TextField
            placeholder="CTRL + F"
            label="Find"
            id="findInput"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          <IconButton color="secondary" onClick={() => setModalOpen(true)}>
            <Add />
          </IconButton>
        </Box>

        <Box mt={2} sx={{ height: "80vh", overflowY: "auto" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography>Barcode</Typography>
                </TableCell>

                <TableCell>
                  <Typography>Name</Typography>
                </TableCell>

                <TableCell>
                  <Typography>Qty</Typography>
                </TableCell>

                <TableCell>
                  <Typography>Unit</Typography>
                </TableCell>

                <TableCell>
                  <Typography>Price 1</Typography>
                </TableCell>

                <TableCell>
                  <Typography>Price 2</Typography>
                </TableCell>

                <TableCell> </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {items
                .sort((a, b) =>
                  a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
                    ? -1
                    : 1
                )
                .filter(
                  (item) =>
                    item.name
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase()) ||
                    item.barcode
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase())
                )
                .map((item, i) => (
                  <TableRow
                    key={i}
                    sx={{ background: i % 2 == 0 ? grey[100] : "" }}
                  >
                    <TableCell>
                      <Typography>{item.barcode}</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>{item.name}</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>{item.qty}</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>{item.unit}</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>{item.sellPrice1}</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>{item.sellPrice2}</Typography>
                    </TableCell>

                    <TableCell>
                      <IconButton onClick={() => onEdit(item)}>
                        <ArrowForwardIos />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </HomeLayout>
  );
}
