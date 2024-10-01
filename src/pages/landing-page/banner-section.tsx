import { Grid } from "@mui/material";
import MainBannerCard from "./main-banner-card";
import SmallBannerCard from "./small-banner-card";
import { Product } from "../../types/category";

interface BannerSectionProps {
  products: Product[];
}

export default function BannerSection({ products }: BannerSectionProps) {
  return (
    <Grid
      container
      maxWidth="100%"
      mt="0px"
      ml="0px"
      spacing={2}
      component="section"
      position="relative"
      mb={{ xs: "1500px", lg: "220px" }}
    >
      <Grid item xs={12} pt="10px !important" pl="0px !important" width="100%">
        {products
          .map((product) => (
            <MainBannerCard key={product.id} product={product} />
          ))
          .slice(2, 3)}
      </Grid>
      <Grid
        item
        xs={12}
        spacing={2}
        container
        position="absolute"
        top={{ xs: "65%", lg: "60%" }}
        maxWidth={{ sm: "100vw !important" }}
        px={{
          xs: "1rem !important",
          sm: "1.5rem !important",
          lg: "2rem !important",
        }}
      >
        {products
          .map((product) => (
            <Grid key={product.id} item xs={12} md={3}>
              <SmallBannerCard product={product} />
            </Grid>
          ))
          .slice(4, 8)}
      </Grid>
    </Grid>
  );
}
