import { URL_API } from "../../const/const";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("fetch/fetchProduct", async (productId, { getState }) => {
  const state = getState();
  const token = state.auth.accessToken;

  const responce = await fetch(`${URL_API}api/products/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!responce.ok) {
    throw new Error(`Не удалось загрузить информацию о продукте с id: ${productId} `);
  }

  return await responce.json();
});

const initialState = {
  product: {},
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
