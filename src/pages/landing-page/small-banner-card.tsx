import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Stack
} from "@mui/material";
import React from "react";

const SmallBannerCard: React.FC<{
  product: {
    title: string;
    description: string;
    price: number;
    thumbnail: string;
  };
}> = ({ product }) => {
  return (
    <Card
      elevation={4}
      sx={{
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "white",
      }}
    >
      <Stack direction="column" justifyContent="center" ml="10px">
        <CardHeader
          title={product.title}
          titleTypographyProps={{
            variant: "h6",
            color: "text.primary",
            fontSize: "1.1rem",
          }}
        />
        <CardActions>
          <Button variant="contained" color="secondary">
            Shop Now
          </Button>
        </CardActions>
      </Stack>
      <CardMedia
        component="img"
        image={product.thumbnail}
        style={{
          height: "200px",
          width: "auto",
          objectFit: "contain",
          borderRadius: "10px",
          backgroundBlendMode: "multiply",
          background: "inherit",
        }}
      />
    </Card>
  );
};

export default SmallBannerCard;
