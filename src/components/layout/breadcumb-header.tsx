import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

interface BreadCumbHeaderProps {
  presentPage: string;
}

export default function BreadcumbHeader({ presentPage }: BreadCumbHeaderProps) {
  const { pathname } = useLocation();
  const routes = pathname.split("/").filter((x) => x);
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ ml: { xs: 2, sm: 0 } }}>
      <Link
        href="/"
        underline="hover"
        color="inherit"
        sx={{ textDecoration: "none" }}
      >
        Home
      </Link>
      {routes.map((route, idx) => {
        const last = idx === routes.length - 1;
        const to = `/${routes.slice(0, idx + 1).join("/")}`;
        return last ? (
          <Typography key={to} color="textPrimary">
            {presentPage}
          </Typography>
        ) : (
          <Link
            href={to}
            key={to}
            underline="hover"
            color="inherit"
            sx={{ textDecoration: "none", textTransform: "capitalize" }}
          >
            {route}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
