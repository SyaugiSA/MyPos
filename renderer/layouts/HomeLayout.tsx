import * as React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Head from "next/head";
import IMenu from "../interaces/MenuInterface";
import {
  LibraryBooks,
  LocalGroceryStoreSharp,
  History,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Menu: IMenu[] = [
  {
    name: "Cashier",
    link: "/cashier",
    icon: <LocalGroceryStoreSharp />,
  },
  {
    name: "Items",
    link: "/item",
    icon: <LibraryBooks />,
  },
  {
    name: "Histories",
    link: "/history",
    icon: <History />,
  },
];

const drawerWidth = 240;

export default function HomeLayout(props: Props) {
  const router = useRouter();
  const Title = `POS SA ${props.title !== "" ? "! " + props.title : ""}`;
  return (
    <Box>
      <Head>
        <title>{Title}</title>
      </Head>
      <Box sx={{ display: "flex" }}>
        <Drawer
          open={true}
          variant="permanent"
          anchor="left"
          sx={{
            flexShrink: { sm: 0 },
            width: 150,
            "& .MuiDrawer-paper": {
              widows: drawerWidth,
              boxSizing: "border-box",
              background: grey[100],
            },
          }}
        >
          <List>
            {Menu.map((menu, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton onClick={() => router.push(menu.link)}>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1 }}>
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}
