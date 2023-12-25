import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../redux/slices/character-slice";
import Header from "../layouts/Header";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import { Container } from "@mui/system";

const Cards = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.character.characters);
  const status = useSelector((state) => state.character.status);
  const error = useSelector((state) => state.character.error);

  useEffect(() => {
    if (status === "ok") {
      dispatch(fetchCharacters());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <StyledMain>
        <Header />
        <h1>The Rick and Morty API</h1>
      </StyledMain>
      <StyledContainer>
        {characters.map((character) => (
          <div key={character.id}>
            <img src={character.image} alt="img" />
            <Link to={`/character/${character.id}`}>
              <h2>{character.name}</h2>
            </Link>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
          </div>
        ))}
      </StyledContainer>
    </>
  );
};

export default Cards;

const StyledMain = styled("div")({
  width: "100%",
  height: "20rem",
  backgroundColor: "white",
  color: "black",
  textAlign: "center",

  "& h1": {
    marginTop: "5rem",
    fontSize: "6rem",
    color: "#272b33",
    fontFamily: "BlinkMacSystemFont",
    fontWeight: 900,
  },
});

const StyledContainer = styled(Container)({
  "& .MuiContainer-root": {
    marginTop: "5rem",
    display: "flex",
    flexWrap: "noWrap",
    
  },

  "& div": {
    display: "flex",
    backgroundColor: "#3b3e43",
    width: "700px",
    height: "290px",
    borderRadius: "8px",
    margin: "30px",
    transition: "transform 0.5s ease",

    ":hover": {
      boxShadow: "0.5px 2.3px 22.6px rgba(255, 255, 255, 0.247)",
      transform: "scale(1.02)",
    },
  },

  "& img": {
    borderRadius: "10px 0px 0px 10px",
    height: "290px",
    width: "280px",
  },

  "& h2": {
    ":hover": {
      color: "orange",
    },
  },
});
