import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../const/const";

export const fetchCategories = createAsyncThunk("fetch/fetchCategories", async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const token = state.auth.accessToken;

  const response = await fetch(`${URL_API}api/productCategories`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      return rejectWithValue({
        status: response.status,
        error: "Не удалось получить каталог!",
      });
    }
    throw new Error("Не удалось получить каталог!");
  }
  return await response.json();
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
