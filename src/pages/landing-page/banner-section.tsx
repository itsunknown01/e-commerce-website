import { Grid } from "@mui/material";
import MainBannerCard from "./main-banner-card";
import SmallBannerCard from "./small-banner-card";
import { Product } from "../../types/category";

interface BannerSectionProps {
  products: Product[];
}

export default function BannerSection({ products }: BannerSectionProps) {
  const mainProducts = products
    .filter((item) => item.rating > 4.5)
    .sort((b, a) => b.rating - a.rating)
    .slice(1, 2);

  const smallProducts = products
    .filter((item) => item.rating > 3.5)
    .sort((b, a) => b.rating - a.rating)
    .slice(2, 6);

  return (
    <Grid
      container
      maxWidth="95rem"
      mt="0px"
      ml="0px"
      mx="auto"
      spacing={2}
      component="section"
    >
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
  );
}
