import { Card, CardHeader, CardMedia, Stack } from "@mui/material";
import React from "react";

const SmallBannerCard: React.FC<{
  product: {
    title: string;
    description: string;
    price: number;
    image: string;
  };
}> = ({ product }) => {
  return (
    <Card
      elevation={4}
      sx={{
        display: "flex",
        position: "relative",
        overflow: "hidden",
        height: "380px",
        width: "320px",
        justifyContent: "center",
        mx: "auto",
        p: "1.5rem",
       }}
    >
      <CardMedia
        component="img"
        image={product.image}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "66.666667%",
          opacity: "0.5",
          backgroundImage:
            "linear-gradient(to top, #1f2937 1%, rgba(31, 41, 55, 0) 100%)",
        }}
      />
      <Stack direction="column" position="absolute" bottom="0px" left="0px">
        <CardHeader
          title={product.title}
          titleTypographyProps={{
            variant: "h6",
            color: "text.primary",
            fontSize: "1.1rem",
          }}
        />
      </Stack>
    </Card>
  );
};

export default SmallBannerCard;
