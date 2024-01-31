import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../const/const";

export const fetchCart = createAsyncThunk("cart/fetchCart", async (_, { getState, rejectWithValue }) => {
  const token = getState().auth.accessToken;

  try {
    const response = await fetch(`${URL_API}api/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Не удалось загрузить содержимое корзины");
    }

    return await response.json();
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (productData, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;

    try {
      const response = await fetch(`${URL_API}api/cart/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // eslint-disable-next-line quote-props
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Не удалось добавить товар в козину");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const removeProductFromCart = createAsyncThunk(
  "cart/removeProductFromCart",
  async (productId, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;

    try {
      const response = await fetch(`${URL_API}api/cart/products/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Не удалось удалить товар из корзины");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateProductInCart = createAsyncThunk(
  "cart/updateProductInCart",
  async (productData, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;

    try {
      const response = await fetch(`${URL_API}api/cart/products`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // eslint-disable-next-line quote-props
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Не удалось обновить товар в корзине");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
  loadingFetch: false,
  loadingAdd: false,
  loadingUpdate: false,
  loadingRemove: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loadingFetch = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        console.log("action: ", action);
        state.products = action.payload.products;
        state.totalCount = action.payload.totalCount;
        state.totalPrice = action.payload.totalPrice;
        state.loadingFetch = false;
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loadingFetch = false;
        state.error = action.error.message;
      })
      .addCase(addProductToCart.pending, (state) => {
        state.loadingAdd = true;
        state.error = null;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.products.push(action.payload.product);
        state.totalCount = action.payload.totalCount;
        state.loadingAdd = false;
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.loadingAdd = false;
        state.error = action.error.message;
      })
      .addCase(removeProductFromCart.pending, (state) => {
        state.loadingRemove = true;
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        state.products = state.products.filter((item) => item.id !== action.payload.id);
        state.totalCount = action.payload.totalCount;
        state.loadingRemove = false;
      })
      .addCase(removeProductFromCart.rejected, (state, action) => {
        state.loadingRemove = false;
        state.error = action.error.message;
      })
      .addCase(updateProductInCart.pending, (state) => {
        state.loadingUpdate = true;
      })
      .addCase(updateProductInCart.fulfilled, (state, action) => {
        console.log("action: ", action);
        // state.products.map = action.payload;
        state.loadingUpdate = false;
        state.error = null;
      })
      .addCase(updateProductInCart.rejected, (state, action) => {
        state.loadingUpdate = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
