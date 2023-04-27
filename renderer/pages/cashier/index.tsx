import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import HomeLayout from "./../../layouts/HomeLayout";
import { useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import { blue, grey } from "@mui/material/colors";
import { itemType } from "../../types/itemType";

const SubTotal = (items: readonly itemType[]) =>
  items
    .map(({ sellPrice1, qty }) => sellPrice1 * qty)
    .reduce((sum, i) => sum + i, 0);

const currency = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const Number = new Intl.NumberFormat();

export default function Cashier() {
  const [tax, setTax] = useState(0);
  const [pay, setPay] = useState(0);
  const [item, setItem] = useState<itemType[]>([]);
  const [code, setCode] = useState("");

  const invoiceTax: number =
    SubTotal(item) + SubTotal(item) * (!tax ? 0 : tax / 100);

  const Return = !pay ? 0 : pay - invoiceTax;

  const CodeInput = (e: any) => {
    if (e.target.value) {
      setItem((items) => {
        if (items.length !== 0) {
          if (items.find((val) => val.barcode === e.target.value)) {
            return items.map((value) => {
              if (value.barcode === e.target.value) {
                return { ...value, qty: value.qty + 1 };
              } else {
                return value;
              }
            });
          } else {
            return [
              ...items,
              {
                barcode: e.target.value,
                name: "123",
                getPrice: 10000,
                qty: 3,
                sellPrice1: 12000,
                isActive: true,
                unit: "pcs",
              },
            ];
          }
        } else {
          return [
            ...items,
            {
              barcode: e.target.value,
              name: "123",
              getPrice: 10000,
              qty: 3,
              sellPrice1: 12000,
              isActive: true,
              unit: "pcs",
            },
          ];
        }
      });
    }

    return setCode("");
  };

  const onQty = (i: number, e: any) => {
    setItem((value) =>
      value.map((v, index) =>
        index === i ? { ...v, qty: parseInt(e.target.value) } : v
      )
    );
  };

  const onEnter = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      CodeInput(e);
    }
  };

  const BTN_IN = (key: any) => {
    switch (key) {
      case 2:
        document.getElementById("barcodeInput")?.focus();
        break;

      case 19:
        document.getElementById("SButton")?.click();
        break;

      case 16:
        document.getElementById("PButton")?.click();
        break;

      case 0:
        document.getElementById("RButton")?.click();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", (e) => BTN_IN(e.keyCode));
  }, []);

  return (
    <HomeLayout title="Cashier">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        sx={{ height: "100vh" }}
      >
        <Box sx={{ height: "70vh", overflowY: "auto" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="body1">Barcode</Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body1">Name</Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body1">Qty</Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body1">Unit</Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body1">Price</Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body1">Sum</Typography>
                </TableCell>

                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {item.map((val, i) => (
                <TableRow
                  key={i}
                  sx={{ background: i % 2 !== 0 ? grey[100] : "" }}
                >
                  <TableCell>
                    <Typography variant="body1">{val.barcode}</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body1">{val.name}</Typography>
                  </TableCell>

                  <TableCell>
                    <TextField
                      autoFocus
                      value={!val.qty ? 0 : val.qty}
                      onChange={(e) => onQty(i, e)}
                      sx={{ width: 70 }}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography variant="body1">{val.unit}</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body1">
                      {Number.format(val.sellPrice1)}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body1">
                      {Number.format(val.sellPrice1 * val.qty)}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <IconButton
                      color="warning"
                      onClick={() =>
                        setItem((value) =>
                          value.filter((v) => v.barcode !== val.barcode)
                        )
                      }
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell>
                  <TextField
                    autoFocus
                    id="barcodeInput"
                    placeholder="Ctrl + B"
                    onBlur={CodeInput}
                    onKeyDown={(e) => onEnter(e)}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    sx={{ width: 160 }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>

            <TableFooter sx={{ background: blue[50] }}>
              <TableRow>
                <TableCell>
                  <Typography align="right">Sub Total</Typography>
                </TableCell>

                <TableCell colSpan={2}>
                  <Typography align="left">
                    {currency.format(SubTotal(item))}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography align="right">TAX</Typography>
                </TableCell>

                <TableCell colSpan={3}>
                  <TextField
                    value={!tax ? 0 : tax}
                    onChange={(e) => setTax(parseInt(e.target.value))}
                    InputProps={{ endAdornment: <Typography>%</Typography> }}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={4}>
                  <Typography align="right">Total</Typography>
                </TableCell>

                <TableCell colSpan={3}>
                  <Typography align="left">
                    {currency.format(invoiceTax)}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Typography align="right">Pay</Typography>
                </TableCell>

                <TableCell colSpan={2}>
                  <TextField
                    value={!pay ? 0 : pay}
                    onChange={(e) => setPay(parseInt(e.target.value))}
                  />
                </TableCell>

                <TableCell>
                  <Typography align="right">Return</Typography>
                </TableCell>

                <TableCell colSpan={3}>
                  <Typography align="left">
                    {currency.format(Return)}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Box>

        <Box display="flex" justifyContent="space-evenly">
          <Button
            variant="contained"
            color="success"
            id="PButton"
            onClick={() => console.log("PButton")}
            endIcon={<Typography>(CTRL + P)</Typography>}
          >
            <Typography>Print</Typography>
          </Button>
          <Button
            variant="contained"
            id="SButton"
            onClick={() => console.log("SButton")}
            endIcon={<Typography>(CTRL + S)</Typography>}
          >
            <Typography>Save</Typography>
          </Button>
          <Button
            variant="contained"
            color="error"
            id="RButton"
            onClick={() => setItem([])}
            endIcon={<Typography>(CTRL + Space)</Typography>}
          >
            <Typography>Reset</Typography>
          </Button>
        </Box>
      </Box>
    </HomeLayout>
  );
}
