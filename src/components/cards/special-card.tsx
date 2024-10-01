import {
  Favorite,
  FavoriteBorder,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { FormatPrice } from "../../lib/utils";
import { Product } from "../../types/category";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SpecialCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate()
  return (
    <Card
      elevation={4}
      sx={{
        maxWidth: { xs: "350px", sm: "500px" },
        maxHeight: "800px",
        py: "20px",
        borderRadius: "42px",
        mx: { xs: "auto", sm: 0 },
        position: "relative",
        cursor: "pointer"
      }}
      component="div"
      onClick={() => navigate(`/${product.id}`)}
    >
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.title}
        sx={{
          maxWidth: "300px",
          mx: { sm: "auto", xs: 0 },
          objectFit: "contain",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />
      <Stack direction="column" position="absolute" top={60} right={28} zIndex="999px">
        <IconButton
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.87)",
            p: "0.65rem",
            ":hover": {
              bgcolor: "rgba(0, 0, 0, 0.87)",
            },
          }}
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? (
            <Favorite sx={{ color: "white" }} />
          ) : (
            <FavoriteBorder sx={{ color: "white" }} />
          )}
        </IconButton>
      </Stack>
      <CardContent sx={{ mx: "1rem" }}>
        <Typography variant="h6">{product.title.slice(0, 20)}</Typography>
        <Rating value={product.rating.rate} />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          mx: "1rem",
          justifyContent: "space-between",
          pt: "0 !important",
        }}
      >
        <Stack direction="column">
          <Box display="flex" justifyContent="center" mb={1}>
            <Typography variant="h6" color="#81859C" sx={{ marginRight: 2 }}>
              <del>
                <FormatPrice price={product.price} />
              </del>
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                p: 0.5,
                color: "white",
                bgcolor: "rgba(98,84,243,0.6)",
              }}
            >
              -10%
            </Typography>
          </Box>
          <Typography variant="h3" fontSize="1.5rem" fontWeight="600">
            <FormatPrice price={product.price - product.price / 10} />
          </Typography>
        </Stack>
        <Button
          sx={{
            py: "18px",
            bgcolor: "rgb(98,84,243)",
            color: "white",
            borderRadius: "20px",
            ":hover": {
              bgcolor: "rgb(98,84,243)",
              color: "white",
            },
          }}
        >
          <ShoppingCartOutlined />
        </Button>
      </CardActions>
    </Card>
  );
}
