import { Close, Search } from "@mui/icons-material";
import { IconButton, TextField, Box, InputAdornment } from "@mui/material";
import { useState } from "react";

const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "999px", // Rounded full
    fontSize: "1rem", // Text-lg
    "&::placeholder": {
      fontSize: "0.875rem", // Placeholder text-base
      letterSpacing: "0.025em", // Placeholder tracking-wide
      color: "#9CA3AF", // Placeholder text-gray-400
      fontWeight: "400", // Placeholder font-normal
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1F2937", // Focus ring-darkText
    },
  },
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Shadow-sm
};
export default function SearchItem() {
  const [searchText, setSearchText] = useState("");
  return (
    <Box
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "36rem",
      }}
    >
      <TextField
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search products..."
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {searchText ? (
                <IconButton
                  onClick={() => setSearchText("")}
                  edge="end"
                  color="error"
                >
                  <Close />
                </IconButton>
              ) : (
                <IconButton edge="end">
                  <Search />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
        sx={textFieldStyles}
      />
    </Box>
  );
}
