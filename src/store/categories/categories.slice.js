import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk("fetch/categories", async (_, { getState }) => {
  const state = getState();
  const token = state.auth.accessToken;
  console.log("token: ", token);

  const response = await fetch("https://koff-api.vercel.app/api/productCategories", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
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
        console.log("action: ", action);
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
