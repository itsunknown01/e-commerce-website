import { Box, Stack, Typography } from "@mui/material";
import { Product } from "../../types/category";
import { services } from "../../utils/contants";
import ProductCard from "../../components/cards/product-card";

export default function FeatureSection({ products }: { products: Product[] }) {
  const featureProducts = products
    ?.filter(
      (product: Product) =>
        product.category === "smartphones" || product.category === "laptops"
    )
    .sort((a: Product, b: Product) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <Stack
    component="section"
      sx={{ backgroundColor: "white" }}
      my="5rem"
      maxWidth="82.5rem"
      mx="auto"
      p="2rem 2rem 0 2rem"
    >
      <Typography
        variant="h6"
        fontSize="2.25rem"
        mb="3rem"
        textTransform="capitalize"
        fontWeight="600"
      >
        Feature Products
      </Typography>
      <Box display="flex" alignItems="center" gap="4rem" pb="2rem">
        {featureProducts.map((featureProduct) => (
          <ProductCard key={featureProduct.id} product={featureProduct} />
        ))}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pt={10}
        mx={-4}
        px={4}
        sx={{
          backgroundColor: "rgb(245 246 250 / 1)",
        }}
      >
        {services.map((service,idx) => (
          <Box display="flex" alignItems="center" gap="15px" key={idx}>
            <img
              src={service.image}
              alt={service.title}
              width={40}
              height={26}
            />
            <Box>
              <Typography variant="h6">{service.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {service.tagline}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
