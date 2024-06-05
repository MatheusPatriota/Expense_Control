import "./styles.css";

import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { FaRegChartBar } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";

import DropdownButton from "../components/DropdownButton";
import Logo from "../components/Logo";
import { IoIosSwitch } from "react-icons/io";
import { Button } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { CreditCard, CurrencyExchange, MoneyOff } from "@mui/icons-material";

const drawerWidth = 240;

function BaseLayout(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const navigate = useNavigate();
  const { SignOut } = useAuth();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const routesInformation = [
    {
      routeName: "Informações Gerais",
      link: "",
      icon: <IoHome />,
    },
    {
      routeName: "Controle Anual",
      link: "controle-anual",
      icon: <IoIosSwitch />,
    },
    {
      routeName: "Ganhos",
      link: "ganhos",
      icon: <CurrencyExchange />,
    },
    {
      routeName: "Gastos",
      link: "gastos",
      icon: <MoneyOff />,
    },
    {
      routeName: "Cartões de Crédito",
      link: "cartoes-de-credito",
      icon: <CreditCard />,
    },
    {
      routeName: "Investimentos",
      link: "investimentos",
      icon: <FaRegChartBar />,
    },
  ];

  function handleClickedLink(link: string) {
    navigate(link);
  }

  const drawer = (
    <div>
      <Logo />
      <div className="flex justify-start pl-4">
        <DropdownButton />
      </div>
      <List>
        {routesInformation.map(({ routeName, link, icon }) => (
          <ListItem key={routeName} disablePadding>
            <ListItemButton onClick={() => handleClickedLink(link)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={routeName} />
            </ListItemButton>
          </ListItem>
        ))}
        <Button onClick={() => SignOut()}>Sair</Button>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="bg-[#edf3fb] h-screen">
      <CssBaseline />
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default BaseLayout;
