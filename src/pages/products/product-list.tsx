import { Grid } from "@mui/material";
import { Product } from "../../types/category";
import SpecialCard from "../../components/cards/special-card";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={12} md={4} key={product.id}>
          <SpecialCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
