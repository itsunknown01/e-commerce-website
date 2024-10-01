import { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";

import BreadcumbHeader from "../../components/layout/breadcumb-header";
import FilterList from "../../components/feature/filter-list";
import ProductList from "./product-list";
import { Product } from "../../types/category";
import axios from "axios";

export default function ProductsPage() {
  const [filters,setFilters] = useState([])
  const [categories, setCategories] = useState<Array<string>>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const token = import.meta.env.VITE_CMS_TOKEN || "";

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);

      const allCategories: Array<string> = Array.from(
        new Set(response.data.map((product) => product.category))
      );
      setCategories(allCategories);
    };

    fetchProducts();
  }, [token]);

  const updateFilters = useCallback((newFilters) =>{
    setFilters((prev) => ({
      ...prev,
      ...newFilters
    }))
  },[])

  // const existingCategoryFilters = filters.find((filter) => filter.id === "category")
  // if (categories.length > 0 && !existingCategoryFilters) {
  //   filters.push({
  //     id: "category",
  //     name: "Category",
  //     options: categories.map((category) => ({
  //       value: category.split(" ").join("-"),
  //       label: category.toUpperCase(),
  //       checked: false,
  //     })),
  //   });
  // }

  return (
    <Stack direction="column" my="1rem" component="main">
      <Container sx={{ p: "0px !important",maxWidth: "1400px !important" }}>
        <BreadcumbHeader presentPage="Products" />
        <Box my="1.5rem" textAlign={{ xs: "center", sm: "start" }}>
          <Typography variant="h5">All Products</Typography>
        </Box>
        <Divider />
        <Box display="flex" my="1.5rem" gap="2rem">
          <FilterList filters={filters} updateFilter={updateFilters} />
          <ProductList products={products} />
        </Box>
      </Container>
    </Stack>
  );
}
