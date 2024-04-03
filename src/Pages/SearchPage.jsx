import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import SearchPublication from "../Components/SearchPublication";

const SearchPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar />
      <SearchPublication />
    </Box>
  );
};

export default SearchPage;
