import { Card, CardHeader, CardMedia, Stack } from "@mui/material";
import React from "react";

const CategoryCard: React.FC<{
  category: {
    title: string;
    image: string;
  };
}> = ({ category }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        background: "white",
        width: "100%",
        height: "100%",
        ":hover": {
          opacity: 1
        }
      }}
    >
      <CardMedia
        component="img"
        image={category.image}
        sx={{
          width: "100%",
          height: "80%",
        }}
      />
      <Stack direction="column" textAlign="center">
        <CardHeader
          title={category.title}
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

export default CategoryCard;
