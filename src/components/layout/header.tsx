import {
  Box,
  Button,
  Divider,
  Link,
  Paper,
  Stack
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { navLinks } from "../../utils/contants";
import CategoryMenu from "../feature/category-menu";
import SearchItem from "../feature/search-item";

export default function Header() {
  const navigate = useNavigate();

  const handleCLick = () => {
    navigate("/login");
  };

  return (
    <Paper
      component="header"
      elevation={4}
      sx={{
        width: "100%",
        px: "6rem",
        backgroundColor: "rgb(250, 250, 250)",
        boxSizing: "border-box",
        position: "relative"
      }}
    >
      <Box
        py="1rem"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link
          href="/"
          sx={{
            textDecoration: "none",
            color: "black",
            fontWeight: 500,
            paddingY: "0.5rem",
            paddingX: "0.75rem",
            fontSize: "17px",
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
        <SearchItem />
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "black",
            color: "white",
            textTransform: "capitalize",
            borderRadius: "5px",
            ":hover": {
              backgroundColor: "black",
            },
          }}
          onClick={handleCLick}
        >
          Login
        </Button>
      </Box>
      <Divider />

      <Stack
        component="nav"
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap="5rem"
        p="0.75rem 4rem"
      >
        <CategoryMenu />
        {navLinks.map((navLink) => (
          <Link
            href={navLink.url}
            key={navLink.label}
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
      </Stack>
    </Paper>
  );
}