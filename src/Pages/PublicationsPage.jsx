import {
  Box,
  Button,
  CardActionArea,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Card from "@mui/material/Card";
import { publicationContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import ServerDown from "../Components/ServerDown";

const ContainerButton = styled(Button)({
  backgroundColor: "#40A418",
  marginTop: "2rem",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "white",
    color: "#40A418",
    border: "1px #40A418 solid",
  },
});

const OutlineButton = styled(Button)({
  border: "1px #40A418 solid",
  marginTop: "2rem",
  borderRadius: "30px",
  color: "#40A418",
  marginRight: "10px",
  "&:hover": {
    backgroundColor: "#40A418",
    color: "white",
    border: "1px #40A418 solid",
  },
});
const PublicationsPage = () => {
  const { publication } = useContext(publicationContext);
  const { data, error } = publication;

  console.log("skjdcns.kadjcna;wkedc", error);

  function openInNewTab(url) {
    const newTab = window.open(url, "_blank");
    newTab.focus();
  }

  const navigate = useNavigate();

  return (
    <Box>
      <Navbar />
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: "500", marginLeft: "2.5rem" }}
        >
          Academic Results
        </Typography>
        {!error ? (
          data.map((d, index = 0) => {
            return (
              <Link
                to={d.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Box sx={{ margin: "2rem" }}>
                  <Card key={index++}>
                    <CardActionArea>
                      <CardContent>
                        <Typography variant="h8">{d.url}</Typography>
                        <Typography variant="h6" style={{ fontWeight: "bold" }}>
                          {d.title}
                        </Typography>
                        <Typography variant="h6" style={{ fontWeight: "200" }}>
                          {d.abstract != null
                            ? `${d.abstract.substring(0, 100)}...`
                            : ""}
                        </Typography>
                        <OutlineButton variant="outlined">
                          <Typography
                            variant="h7"
                            onClick={() => {
                              navigate("/editor");
                            }}
                          >
                            cite
                          </Typography>
                        </OutlineButton>
                        <ContainerButton
                          variant="contained"
                          onClick={() => {
                            openInNewTab(d.url);
                          }}
                        >
                          <Typography variant="h7">Explore</Typography>
                        </ContainerButton>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </Link>
            );
          })
        ) : (
          <ServerDown />
        )}
      </Box>
    </Box>
  );
};

export default PublicationsPage;
