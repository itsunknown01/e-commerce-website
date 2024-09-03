import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Card } from "../../components/ui/card";
import { FormatPrice } from "../../lib/utils";

const MainBannerCard: React.FC<{
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
      <Stack direction="column" justifyContent="center" ml="40px">
        <CardHeader
          title={product.title}
          subheader={product.description}
          subheaderTypographyProps={{
            variant: "subtitle2",
            fontWeight: 500,
            color: "black",
          }}
          sx={{ width: "264px" }}
        />
        <CardContent>
          <Typography variant="subtitle1" fontSize="16px">
            From{" "}
            <span>
              <FormatPrice price={product.price} />
            </span>{" "}
            or{" "}
            <span>
              <FormatPrice price={product.price / 3} />
            </span>
          </Typography>
        </CardContent>
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
          height: "421.4px",
          width: "636px",
          objectFit: "contain",
          borderRadius: "10px",
          mixBlendMode: "multiply",
          background: "inherit",
        }}
      />
    </Card>
  );
};

export default MainBannerCard;
