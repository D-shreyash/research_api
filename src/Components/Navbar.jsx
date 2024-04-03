import React from "react";
import { AppBar, Box, Stack, Typography, styled } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CloseIcon from "@mui/icons-material/Close";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Link, useNavigate } from "react-router-dom";

const OuterBox = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

const Outline = styled(Box)({
  display: "flex",
  flexDirection: "row",
  border: "1px solid #E7E6E6",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        height: "50px",
        background: "none",
        color: "black",
        marginBottom: "2rem",
      }}
    >
      <OuterBox direction="row" sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
          }}
        >
          <Outline
            sx={{
              color: "#40A418",
              width: "200px",
            }}
            flex={1}
          >
            <TravelExploreIcon />
            <Link to="/" style={{ textDecoration: "none", color: "#40A418" }}>
              <Typography variant="h8">Research</Typography>
            </Link>
          </Outline>
          <Outline flex={1}>
            <EditNoteIcon
              onClick={() => {
                navigate("/editor");
              }}
            />
          </Outline>
          <Outline flex={1}>
            <FormatQuoteIcon />
          </Outline>
        </Box>
        <Box flex={4} sx={{ display: "flex", justifyContent: "end" }}>
          <CloseIcon />
        </Box>
      </OuterBox>
    </AppBar>
  );
};

export default Navbar;
