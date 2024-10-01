import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Close, Help, Menu, Search, ShoppingBag } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { navLinks } from "../../utils/contants";
import CategoryMenu from "../feature/category-menu";

interface HeaderProps {
  colorMode: { toggleColorMode: () => void };
}

export default function Header({ colorMode }: HeaderProps) {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <Paper component="header" elevation={4} sx={{ width: "100%" }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="rgb(17 24 39)"
        px={{ xs: "1rem", sm: "1.5rem", lg: "2rem" }}
        py="0.5rem"
      >
        <CurrencyMenu />
        <Box display="flex" alignItems="center">
          <Link href="/login" sx={{ textDecoration: "none", color: "white" }}>
            Sign in
          </Link>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ mx: 2, bgcolor: "white" }}
          />
          <Link
            href="/register"
            sx={{ textDecoration: "none", color: "white" }}
          >
            Create an account
          </Link>
        </Box>
      </Box>
      <Stack
        component="nav"
        px={{ xs: "1rem", sm: "1.5rem", lg: "2rem" }}
        py="0.5rem"
        direction="row"
        justifyContent="space-between"
      >
        <Link
          href="/"
          sx={{
            textDecoration: "none",
            color: "black",
            fontWeight: 500,
            fontSize: "17px",
            display: { xs: "none", lg: "flex" },
          }}
        >
          <img
            src="/Logo1.png"
            alt="LocalBazaar Logo"
            width={160}
            height="auto"
            style={{
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </Link>
        <Box display={{ xs: "none", lg: "flex" }} alignItems="center" justifyContent="space-between">
          <CategoryMenu />
          <Box display="flex" alignItems="center" ml="1.25rem">
          {navLinks.map((navLink, idx) => (
            <Link
              href={navLink.url}
              key={idx}
              sx={{
                textDecoration: "none",
                color: "black",
                fontWeight: 500,
                paddingY: "0.5rem",
                paddingX: "0.75rem",
                fontSize: "17px",
              }}
            >
              {navLink.label}
            </Link>
          ))}
          </Box>
        </Box>
        <Box display={{ xs: "flex", lg: "none" }} alignItems="center">
          <MobileSidebar />
          <IconButton>
            <Search />
          </IconButton>
        </Box>
        <Link
          href="/"
          sx={{
            textDecoration: "none",
            color: "black",
            fontWeight: 500,
            fontSize: "17px",
            display: { xs: "flex", lg: "none" },
          }}
        >
          <img
            src="/Logo1.png"
            alt="LocalBazaar Logo"
            width={120}
            height="auto"
            style={{
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </Link>
        <Box gap="20px" display="flex">
          <IconButton sx={{ display: { xs: "none", lg: "block" } }}>
            <Search />
          </IconButton>
          {matches ? (
            <Button variant="outlined" color="inherit">
              Help
            </Button>
          ) : (
            <IconButton>
              <Help />
            </IconButton>
          )}
          <IconButton color="inherit">
            <ShoppingBag />
          </IconButton>
        </Box>
      </Stack>
    </Paper>
  );
}

function CurrencyMenu() {
  const [value, setValue] = useState("CAD");
  const currencies = ["CAD", "USD", "RS", "AUD"];
  return (
    <Select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      sx={{
        ".MuiSelect-select": {
          p: 0,
        },
        ".MuiSelect-icon": {
          color: "white",
        },
        py: "5px",
        px: "10px",
        color: "white",
        "&:focus, &.Mui-focused": {
          borderColor: "white",
        },
        "&.MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "transparent",
          },
          "&:hover fieldset": {
            borderColor: "rgba(255, 255, 255, 0.5)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "white",
          },
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            bgcolor: "rgb(17 24 39)",
            color: "white",
          },
        },
      }}
    >
      {currencies.map((currency, index) => (
        <MenuItem value={currency} key={index}>
          {currency}
        </MenuItem>
      ))}
    </Select>
  );
}

function MobileSidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => setOpen(isOpen);

  const routeHandler = (link: string) => {
    navigate(link);
    setOpen(false);
  };
  return (
    <>
      <IconButton onClick={() => toggleDrawer(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <Box role="presentation" width="90vw">
          <Box px="1rem" display="flex" pt="1.25rem" pb="0.5rem">
            <IconButton onClick={() => toggleDrawer(false)}>
              <Close />
            </IconButton>
          </Box>
          <List
            sx={{
              px: "1rem",
              pb: "0.5rem",
            }}
          >
            {navLinks.map((navLink, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemButton onClick={() => routeHandler(navLink.url)}>
                  <ListItemText primary={navLink.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}