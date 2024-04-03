import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import axios from "axios";
import { publicationContext } from "../App";
import { useNavigate } from "react-router-dom";

const OuterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: "1",
  width: "70%",
});

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  borderRadius: "30px",
  height: "50px",
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    marginLeft: theme.spacing(1),
    width: "100%",
  },
  border: "2px #40A418 solid",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchButton = styled(Button)({
  backgroundColor: "#40A418",
  marginTop: "2rem",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "white",
    color: "#40A418",
    border: "1px #40A418 solid",
  },
});

// logic start from here -------------------->

const SearchPublication = () => {
  const [KeywordToSearch, SetKeywordToSearch] = useState("");

  const { SetPublication } = useContext(publicationContext);

  const navigate = useNavigate();
  const GetPublication = () => {
    let data = JSON.stringify({
      keyword: KeywordToSearch,
      limit: "10",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.gyanibooks.com/search_publication/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        SetPublication(response.data);
        navigate("/publication");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handeleSearch = (e) => {
    SetKeywordToSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <OuterBox>
      <Search sx={{ width: "20px" }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handeleSearch}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              GetPublication();
            }
          }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h7">Academic </Typography>
          <Switch></Switch>
        </Box>
      </Search>
      <SearchButton variant="contained" onClick={GetPublication}>
        <Typography variant="h7">Search the Web</Typography>
      </SearchButton>
    </OuterBox>
  );
};

export default SearchPublication;
