import CategoryCard from "../../components/cards/category-card";
import { Grid, Stack, Typography } from "@mui/material";
import { Product } from "../../types/category";

export default function CategorySection({ products }: { products: Product[] }) {
  return (
    <Stack
      component="section"
      sx={{ backgroundColor: "white" }}
      maxWidth="95rem"
      width="100%"
      height="auto"
      mx="auto"
      p="2rem 2rem 0 2rem"
      mb={{ xs: 85, lg: 10 }}
    >
      <Typography
        variant="h6"
        fontSize="2.25rem"
        mb="3rem"
        textTransform="capitalize"
        fontWeight="600"
      >
        Shop By Category
      </Typography>
      <Grid container spacing={4}>
        <Grid item lg={6} xs={12} height={{ xs: "600px", lg: "592px" }}>
          {products
            .map((product) => (
              <CategoryCard key={product.id} category={product} />
            ))
            .slice(0, 1)}
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          container
          rowGap={2}
          height={{ xs: "600px", lg: "592px" }}
        >
          {products
            .map((product) => (
              <Grid
                key={product.id}
                item
                xs={12}
                height={{ xs: "600px", lg: "270px" }}
              >
                <CategoryCard key={product.id} category={product} />
              </Grid>
            ))
            .slice(1, 3)}
        </Grid>
      </Grid>
    </Stack>
  );
}
