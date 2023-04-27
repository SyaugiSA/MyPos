import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import HomeLayout from "../../layouts/HomeLayout";
import { useEffect, useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import { historyType } from "../../types/historyType";
import { grey } from "@mui/material/colors";

const histories: historyType[] = [
  {
    id: 123,
    items: [
      {
        barcode: "123",
        name: "123",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "456",
        name: "456",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "789",
        name: "789",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "qwe",
        name: "qwe",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "asd",
        name: "asd",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "zxc",
        name: "zxc",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
    ],
  },
  {
    id: 234,
    items: [
      {
        barcode: "123",
        name: "123",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "456",
        name: "456",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "789",
        name: "789",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "qwe",
        name: "qwe",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "asd",
        name: "asd",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "zxc",
        name: "zxc",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
    ],
  },
  {
    id: 345,
    items: [
      {
        barcode: "123",
        name: "123",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "456",
        name: "456",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "789",
        name: "789",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "qwe",
        name: "qwe",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "asd",
        name: "asd",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "zxc",
        name: "zxc",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
    ],
  },
  {
    id: 456,
    items: [
      {
        barcode: "123",
        name: "123",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "456",
        name: "456",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "789",
        name: "789",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "qwe",
        name: "qwe",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "asd",
        name: "asd",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "zxc",
        name: "zxc",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
    ],
  },
  {
    id: 567,
    items: [
      {
        barcode: "123",
        name: "123",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "456",
        name: "456",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "789",
        name: "789",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "qwe",
        name: "qwe",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "asd",
        name: "asd",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
      {
        barcode: "zxc",
        name: "zxc",
        getPrice: 10000,
        qty: 3,
        sellPrice1: 12000,
        isActive: true,
        unit: "pcs",
      },
    ],
  },
];

export default function Histories() {
  const [search, setSearch] = useState("");

  const BTN_IN = (key: number) => {
    switch (key) {
      case 6:
        document.getElementById("searchForm")?.focus();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", (e) => BTN_IN(e.keyCode));
    return;
  }, []);

  return (
    <HomeLayout title="Histories">
      <Box mx={2} my={1}>
        <TextField
          id="searchForm"
          label="Find"
          placeholder="Ctrl + F"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      <Box mt={2} sx={{ height: "80vh", overflowY: "auto" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>ID</Typography>
              </TableCell>

              <TableCell>
                <Typography>Items</Typography>
              </TableCell>

              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {histories
              .sort((a, b) => b.id - a.id)
              .filter((history) => history.id.toString().includes(search))
              .map((history, i) => (
                <TableRow
                  key={i}
                  sx={{ background: i % 2 == 0 ? grey[100] : "" }}
                >
                  <TableCell>
                    <Typography>{history.id}</Typography>
                  </TableCell>

                  <TableCell>
                    <Table>
                      {history.items.slice(0, 3).map((item, i) => (
                        <TableRow key={i}>
                          <TableCell>
                            <Typography>{item.barcode}</Typography>
                          </TableCell>

                          <TableCell>
                            <Typography>{item.name}</Typography>
                          </TableCell>

                          <TableCell>
                            <Typography>{item.qty}</Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </Table>
                  </TableCell>

                  <TableCell>
                    <Typography>
                      <IconButton>
                        <ArrowForwardIos />
                      </IconButton>
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
    </HomeLayout>
  );
}
