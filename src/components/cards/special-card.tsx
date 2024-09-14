import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Rating,
  Typography,
} from "@mui/material";
import { FormatPrice } from "../../lib/utils";
import { Product } from "../../types/category";

export default function SpecialCard({ product }: { product: Product }) {
  return (
    <Card
      sx={{
        display: "flex",
        cursor: "pointer",
        justifyContent: "space-between",
        px: "0.625rem",
        py: "1.25rem",
        textDecoration: "none",
        backgroundColor: "white",
      }}
    >
      <Box
        width="267px"
        height="267px"
        component="a"
        href={`/products/${product.id}`}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
      <CardContent>
        <Typography
          variant="h5"
          component="h5"
          fontWeight="medium"
          gutterBottom
        >
          {product.brand}
        </Typography>
        <Typography
          variant="subtitle1"
          component="h6"
          fontWeight="medium"
          gutterBottom
        >
          {product.title}
        </Typography>
        <Rating name="read-only" value={product.rating} readOnly size="large" />
        <Box mt={1} mb={2}>
          <Typography component="span">
            <FormatPrice price={product.price} />
          </Typography>
          &nbsp;&nbsp;
          <Typography component="span" sx={{ textDecoration: "line-through" }}>
            <FormatPrice price={product.price * 1.5} />
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography component="p" variant="body2">
            <strong>5</strong> days
          </Typography>
          <Box display="flex" gap={1} alignItems="center">
            {[1, 1, 1].map((item, index) => (
              <Chip
                key={index}
                label={item}
                sx={{
                  bgcolor: "#dc3545",
                  color: "#fff",
                  borderRadius: "50%",
                  padding: "8px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              />
            ))}
          </Box>
        </Box>
        <Box my={2}>
          <Typography variant="body2" gutterBottom>
            {`Products: ${product.stock}`}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(product.stock / 100) * 100} // Assuming 100 is the max stock
            sx={{ color: "primary.main" }}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            bgcolor: "#232f3e",
            color: "#fff",
            paddingY: "12px",
            paddingX: "32px",
            borderRadius: "25px",
            zIndex: "999px",
          }}
            onClick={() => alert("Button Clicked")}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}