import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../types/category";

export default function CarousalProducts({
  products,
}: {
  products: Product[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); 
    }, 15000); 

    return () => clearInterval(interval); 
  }, []);
  return (
    <Stack
      component="section"
      sx={{ backgroundColor: "white" }}
      maxWidth="95rem"
      width="100%"
      mx="auto"
      p="2rem 2rem 0 2rem"
      mb={2}
      height="621.4px"
    >
      <Typography
        variant="h6"
        fontSize="2.25rem"
        mb="3rem"
        textTransform="capitalize"
        fontWeight="600"
      >
        Special Products
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
          }}
        >
          <ArrowForwardIos />
        </IconButton>
        <Grid container justifyContent="center">
          <Grid item>
            <img
              src={products[currentIndex]?.image}
              alt={products[currentIndex]?.title}
              style={{ width: "100%", objectFit: "contain" }}
            />
            <Typography variant="h6" align="center">
              {products[currentIndex]?.title}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}