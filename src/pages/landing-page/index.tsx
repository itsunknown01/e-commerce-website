import { Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../types/category";
import BannerSection from "./banner-section";
import CarousalProducts from "./carousal-products";
import CategorySection from "./category-section";
import FamousSection from "./famous-section";

export default function LandingPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const token = import.meta.env.VITE_CMS_TOKEN || "";

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };

    fetchProducts();
  }, [token]);

  return (
    <Stack component="main" direction="column">
      <BannerSection products={products} />
      <CategorySection products={products} />
      <CarousalProducts products={products} />
      <FamousSection products={products} />
      {/* sale section */}
    </Stack>
  );
}
