import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetch/products", async (_, { getState }) => {
  const state = getState();
  const token = state.auth.accessToken;

  const response = await fetch("https://koff-api.vercel.app/api/products", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    console.log("response.ok: ", response.ok);
    throw new Error("Не удалось получить список продуктов!");
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
        console.log("action: ", action);
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log("action: ", action);
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
