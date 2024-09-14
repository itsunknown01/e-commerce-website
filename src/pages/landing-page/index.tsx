import { Box, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Product } from "../../types/category";
import BannerSection from "./banner-section";
import ProductCard from "../../components/cards/product-card";
import FeatureSection from "./feature-section";
import { trusteData } from "../../utils/contants";
import SpecialCard from "../../components/cards/special-card";

export default function LandingPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products/search?q=phone"
      );
      setProducts(response.data.products);
    };

    fetchProducts();
  }, []);

  const famousProducts = products
    ?.filter((product: Product) => product.rating > 4)
    .slice(0, 4);

  const specialProducts = products
    ?.filter((product: Product) => product.discountPercentage > 15)
    .slice(0, 4);

  const popularProducts = products
    .filter((product) => product.rating > 3.5)
    .slice(0, 8);

  console.log(popularProducts);
  return (
    <Stack mt="1rem" component="main">
      <BannerSection products={products} />
      <FeatureSection products={products} />
      <Stack component="section" direction="column" px={8} py="1.25rem">
        <Typography
          variant="h6"
          fontWeight={600}
          fontSize="2.25rem"
          mt="3rem"
          textTransform="capitalize"
        >
          Famous Products
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mx="0.75rem"
          my={4}
        >
          {famousProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Box>
      </Stack>
      <Stack
        component="section"
        direction="column"
        mx="auto"
        py="1.25rem"
        maxWidth="80rem"
        alignItems="center"
        sx={{ backgroundColor: "white" }}
      >
        <Typography variant="h3" fontWeight={600} fontSize="1.5rem" mt="3rem">
          Trusted by 1000+ companies
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt="1.5rem"
        >
          {trusteData.map((item, idx) => (
            <Fragment key={idx}>
              <img
                src={item.image}
                alt={item.title}
                width={143}
                height={100}
                style={{
                  objectFit: "contain",
                }}
              />
            </Fragment>
          ))}
        </Box>
      </Stack>
      <Stack
        component="section"
        direction="column"
        px={8}
        py="1.25rem"
        maxWidth="80rem"
        mx="auto"
      >
        <Typography
          variant="h6"
          fontWeight={600}
          fontSize="2.25rem"
          mt="3rem"
          textTransform="capitalize"
        >
          Special Products
        </Typography>
        <Grid container spacing={2} component="div" mt="1.5rem">
          {specialProducts.map((product) => (
            <Grid item xs={6} key={product.id}>
              <SpecialCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Stack
        component="section"
        direction="column"
        px={8}
        py="1.25rem"
        maxWidth="90rem"
        mx="auto"
        sx={{ backgroundColor: "white" }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          fontSize="2.25rem"
          mt="3rem"
          textTransform="capitalize"
        >
          Popular Products
        </Typography>
        <Grid container spacing={4} component="div" mt="1.5rem">
          {popularProducts.map((product) => (
            <Grid item xs={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
