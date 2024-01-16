import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL_API } from "../../const/const";

export const fetchProducts = createAsyncThunk("fetch/fetchProducts", async (_, { getState }) => {
  const state = getState();
  const token = state.auth.accessToken;

  const response = await fetch(`${URL_API}api/products`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить продукты!");
  }

  return await response.json();
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
