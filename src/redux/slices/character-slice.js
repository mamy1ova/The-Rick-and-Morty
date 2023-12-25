import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
  "fetchCharacters/characters",
  async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character?_limit=6"
      );
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState = {
  characters: [],
  status: "ok",
  error: null,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacters.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.characters = payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
