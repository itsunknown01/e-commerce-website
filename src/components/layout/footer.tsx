import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Input,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <Stack component="footer" width="100%">
      <Paper
        component="div"
        elevation={4}
        sx={{
          m: "auto",
          bgcolor: "white",
          maxWidth: "60vw",
          px: { xs: "1rem", lg: "6rem" },
          py: "2.5rem",
          borderRadius: "12px",
          border: "white",
          bottom: "0.25rem",
          transform: "translate(0, 50%)",
        }}
      >
        <Grid
          container
          textAlign="center"
          justifyContent={"center"}
          mt="0 !important"
          ml="0 !important"
        >
          <Grid
            item
            xs={12}
            md={6}
            pt="0 !important"
            pl="0 !important"
            width="412px"
          >
            <Typography variant="h6" fontSize="16px" fontWeight={500}>
              Ready to get started?
            </Typography>
            <Typography variant="h6" fontSize="16px" fontWeight={500}>
              Talk to us today
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            container
            justifyContent={{ xs: "center", lg: "flex-end" }}
            alignItems="center"
            pt={{ xs: "1rem", lg: "0 !important" }}
            pl="0 !important"
          >
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  px: "2.25rem",
                  py: "0.5rem",
                  textTransform: "uppercase",
                  bgcolor: "rgb(98,84,243)",
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgb(98,84,243)",
                    color: "white",
                  },
                }}
              >
                Get started
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>

      <Box
        pt="8rem"
        bgcolor="rgb(17 24 39)"
        color="white"
        pb="1rem"
        textAlign="center"
      >
        <Grid
          container
          maxWidth={"80rem"}
          mx={"auto"}
          mb="2rem"
          spacing={2}
          gap={{ xs: 2, sm: 0 }}
          mt="0 !important"
        >
          <Grid item xs={12} md={3} pt="0 !important" px="1rem !important">
            <Typography mb="1.25rem">Unknown</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} pt="0 !important" pl="0 !important">
            <Typography mb="1.25rem">
              Subscribe to get important updates
            </Typography>
            <Box
              component="form"
              display="flex"
              flexDirection="column"
              mx="2rem"
              gap="1rem"
            >
              <Input
                type="email"
                placeholder="Type your e-email"
                sx={{ color: "white", borderColor: "white" }}
              />
              <Button
                sx={{
                  bgcolor: "rgb(98,84,243)",
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgb(98,84,243)",
                    color: "white",
                  },
                }}
              >
                Subcribe
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} pt="0 !important" pl="0 !important">
            <Typography mb="1rem">Follow Me</Typography>
            <Box display="flex" gap="0.5rem" justifyContent="center">
              <IconButton sx={{ border: "2px solid white" }}>
                <FaDiscord color="white" />
              </IconButton>
              <IconButton sx={{ border: "2px solid white" }}>
                <FaInstagram color="white" />{" "}
              </IconButton>
              <IconButton sx={{ border: "2px solid white" }}>
                <FaFacebook color="white" />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} pt="0 !important" pl="0 !important">
            <Typography mb="1.25rem">Call Us</Typography>
            <Typography>+91 8092623457</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: "white" }} />

        <Box mt="0.75rem">
          <Typography>© 2023 All Rights Reserved by Unknown</Typography>
        </Box>
      </Box>
    </Stack>
  );
}
