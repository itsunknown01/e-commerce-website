import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Stack
} from "@mui/material";

const MainBannerCard: React.FC<{
  product: {
    title: string;
    description: string;
    price: number;
    image: string;
  };
}> = ({ product }) => {
  return (
    <Card
      sx={{
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "white",
        width: "100%",
        height: "448px",
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: "10px",
          display: { xs: "none", lg: "block" },
          position: "absolute",
        }}
      />
      <Stack
        direction="column"
        justifyContent="center"
        position="relative"
        width="100%"
        height="100%"
        pb={{ xs: "5rem", sm: "10rem" }}
      >
        <CardMedia
          component="img"
          image={product.image}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "10px",
            display: { xs: "block", lg: "none" },
            position: "absolute",
          }}
        />
        <Box
          mt={{ xs: "1rem", sm: "1.5rem" }}
          display="flex"
          flexDirection="column"
          sx={{
            py: "4rem !important",
            maxWidth: "48rem",
            px: { xs: "1rem", sm: "1.5rem", lg: "2rem" },
            position: "relative",
            textAlign: "center",
            mx: "auto",
          }}
        >
          <CardHeader
            title={product.title}
            titleTypographyProps={{
              fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
              lineHeight: { xs: "2.5rem", sm: 1 },
              fontWeight: 700,
              letterSpacing: "-0.025em",
            }}
          />
          <Button
            sx={{
              px: "2rem",
              py: "0.75rem",
              bgcolor: "rgb(79 70 229)",
              width: "187px",
              color: "white",
              mx: "auto",
              ":hover": {
                bgcolor: "rgb(79 70 229)",
              },
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default MainBannerCard;
