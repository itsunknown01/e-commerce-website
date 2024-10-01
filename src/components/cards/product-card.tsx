import { Box, Card, CardContent, Typography } from "@mui/material";
import { FormatPrice } from "../../lib/utils";
import { Product } from "../../types/category";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      sx={{
        textDecoration: "none",
        width: "100%",
        height: "100%",
      }}
      elevation={0}
    >
      <CardContent
        component="a"
        href={`/products/${product.id}`}
        sx={{
          display: "flex",
          width: "auto",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.5s linear",
          "&:after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "0%",
            height: "100%",
            content: "none",
            cursor: "pointer",
          },
          "&:hover": {
            "&:after": {
              width: "100%",
            },
          },
          pb: "0",
          borderRadius: "0.5rem",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          width="100%"
          height={421.21}
          style={{
            objectFit: "contain",
            transition: "all 0.5 linear",
          }}
        />
        <Typography
          style={{
            position: "absolute",
            top: "5%",
            right: "2%",
            textTransform: "uppercase",
            backgroundColor: "rgb(250 250 250 / 1)",
            color: "black",
            padding: "0.5rem 0.75rem",
            borderRadius: "2rem",
          }}
        >
          {product.category}
        </Typography>
      </CardContent>
      <Box
        display="flex"
        mx="0"
        justifyContent="space-between"
        alignItems="center"
        px="2rem"
        py="1rem"
      >
        <Typography
          variant="h3"
          fontSize="1.1rem"
          textTransform="capitalize"
          color="rgba(29,29,29,0.8)"
        >
          {product.title.slice(0, 20)}
        </Typography>
        <Typography variant="body2" color="rgb(132,144,255)">
          <FormatPrice price={product.price} />
        </Typography>
      </Box>
    </Card>
  );
}
