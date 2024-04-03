import React from "react";
import { Container, Typography } from "@mui/material";

const ServerDown = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Server Down
      </Typography>
      <Typography variant="body1" align="center">
        We apologize for the inconvenience, our server is currently down for
        maintenance. Please check back soon.
      </Typography>
    </Container>
  );
};

export default ServerDown;
