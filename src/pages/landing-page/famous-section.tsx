import { Box, Stack, Typography } from "@mui/material";
import { Product } from "../../types/category";
import { services } from "../../utils/contants";
import ProductCard from "../../components/cards/product-card";

export default function FamousSection({ products }: { products: Product[] }) {
  const famousProducts = products
    ?.filter((product: Product) => product.rating.rate > 4)
    .sort((a: Product, b: Product) => b.rating.rate - a.rating.rate)
    .slice(0, 3);

  return (
    <Stack
      component="section"
      sx={{ backgroundColor: "white" }}
      maxWidth="82.5rem"
      width="100%"
      mx="auto"
      p="2rem 2rem 0 2rem"
      mb={2}
    >
      <Typography
        variant="h6"
        fontSize="2.25rem"
        mb="3rem"
        textTransform="capitalize"
        fontWeight="600"
      >
        Famous Products
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems="center"
        gap={{ xs: "1rem", lg: "4rem" }}
        pb="2rem"
        height={{ xs: "100rem", lg: "38rem" }}
      >
        {famousProducts.map((famousProduct) => (
          <ProductCard key={famousProduct.id} product={famousProduct} />
        ))}
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems="center"
        justifyContent="space-between"
        mx={-4}
        px={4}
        sx={{
          backgroundColor: "rgb(245 246 250 / 1)",
        }}
      >
        {services.map((service, idx) => (
          <Box textAlign="center" gap="15px" key={idx} display="flow-root">
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: "auto",
                height: "5rem",
              }}
            />
            <Box mt="0.75rem">
              <Typography variant="h6">{service.title}</Typography>
              <Typography variant="body2" color="text.secondary" mt="0.75rem">
                {service.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
