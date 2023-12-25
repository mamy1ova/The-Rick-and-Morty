import { Box, Button, styled } from "@mui/material";
import React from "react";
import { BsFillMortarboardFill } from "react-icons/bs";

const Header = () => {
  return (
    <StyledContainer>
      <h2>
        <BsFillMortarboardFill />
      </h2>
      <div>
        <button>Docs</button>
        <button>About</button>
        <Button>support us</Button>
      </div>
    </StyledContainer>
  );
};

export default Header;

const StyledContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  color: "black",
  width: "100%",
  height: "4rem",
  paddingLeft: "4rem",
  paddingRight: "2rem",

  "& button": {
    background: "none",
    border: "none",
    fontWeight: "bold",
    fontSize: "1rem",

    ":hover": {
      color: "orange",
    },
  },

  "& div": {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    fontWeight: "bold",
    margin: 0,
  },

  "& .MuiButton-root": {
    background: "none",
    color: "black",
    border: "1px solid orange",
    borderRadius: "0.8rem",
    fontSize: "0.7rem",
    padding: "0.6rem",
    width: "9rem",

    ":hover": {
      backgroundColor: "orange",
      color: "white",
      fontWeight: "bold",
    },
  },
});
