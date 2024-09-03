import { Category } from "@/src/types/category";
import styled from "@emotion/styled";
import { ExpandMore as FaExpandMore } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { categories } from "../../utils/contants";

const StyleMenuButton = styled(Button)({
  display: "inline-flex",
  alignItems: "center",
  gap: 2,
  borderRadius: "8px",
  borderColor: "gray",
  color: "gray",
  fontWeight: "600",
  paddingY: "0.375rem",
  paddingX: "0.75rem",
});

export default function CategoryMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  // const [categories,setCategories] = useState<Category[]>([]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const response = await axios.get("http://localhost:8000/api/9c41a2ba-be7d-4d14-95c4-90f450496e74/category",{
  //       headers: {
  //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyeWFtYW5nb2hhaW5AZ21haWwuY29tIiwiaWF0IjoxNzI0OTMxNzEzLCJleHAiOjE3MjUwMTgxMTN9.ElWcN4Iuv983LFTq8QXO_J4gDnJP7-5pWyN0llNFOyM"
  //       }
  //     })
  //     console.log(response.data);
  //     setCategories(response.data);
  //   }

  //   fetchCategories()
  // },[])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <StyleMenuButton
        variant="outlined"
        onClick={handleClick}
        endIcon={<FaExpandMore />}
      >
        Select Category
      </StyleMenuButton>
      <Menu
        anchorEl={anchorEl} 
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            width: "13rem", // w-52
            zIndex: 50,
          },
        }}
      >
        {categories.map((item) => (
          <MenuItem
            key={item._id}
            onClick={handleClose}
            sx={{
              padding: 0,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)", // Equivalent to hover:bg-white/20
              },
            }}
          >
            <Link
              to={`/category/${item._id}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: "100%",
                padding: "8px 12px", // Equivalent to py-2 px-3
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <img
                src={item.image}
                alt="categoryImage"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  borderRadius: "0.375rem",
                }} // w-6 h-6 rounded-md
              />
              {item.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}