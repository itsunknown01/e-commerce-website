import { Grid, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../types/category";
import MainBannerCard from "./main-banner-card";
import SmallBannerCard from "./small-banner-card";

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

  const mainProducts = products
    .filter((item) => item.rating > 4.5)
    .sort((b, a) => b.rating - a.rating)
    .slice(1, 2);

  const smallProducts = products
    .filter((item) => item.rating > 3.5)
    .sort((b, a) => b.rating - a.rating)
    .slice(2, 6);

  return (
    <Stack mt="1rem">
      <Grid container maxWidth="95rem" mt="0px" ml="0px" mx="auto" spacing={2}>
        <Grid item xs={6}>
          {mainProducts.map((product) => (
            <MainBannerCard key={product.id} product={product} />
          ))}
        </Grid>
        <Grid item xs={6} container spacing={2}>
          {smallProducts.map((product) => (
            <Grid key={product.id} item xs={6} width="25%">
              <SmallBannerCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
}
