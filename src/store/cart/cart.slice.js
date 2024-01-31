import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../const/const";

export const fetchCart = createAsyncThunk("fetch/fetchCart", async (_, { getState, rejectWithValue }) => {
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
  "fetch/fetchCart",
  async (productData, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;

    try {
      const response = await fetch(`${URL_API}api/cart/products`, {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
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
  "fetch/fetchCart",
  async (idProducts, { getState, rejectWithValue }) => {
    const token = getState().auth.accessToken;

    try {
      const response = await fetch(`${URL_API}api/cart/products/${idProducts}`, {
        method: "DELETE",
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
  },
);

export const updateProductInCart = createAsyncThunk("fetch/fetchCart", async (_, { getState, rejectWithValue }) => {
  const token = getState().auth.accessToken;

  try {
    const response = await fetch(`${URL_API}api/cart`, {
      method: "PUT",
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
        state.products = action.payload;
        state.loadingFetch = false;
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loadingFetch = false;
        state.error = action.error.message;
      });
    // .addCase(addProductToCart.pending, (state) => {
    //   state.loadingAdd = true;
    //   state.error = null;
    // })
    // .addCase(addProductToCart.fulfilled, (state, action) => {
    //   console.log("action: ", action);
    //   // state.products = action.payload;
    //   state.loadingAdd = false;
    //   state.error = null;
    // })
    // .addCase(addProductToCart.rejected, (state, action) => {
    //   state.loadingAdd = false;
    //   state.error = action.error.message;
    // })
    // .addCase(removeProductFromCart.pending, (state) => {
    //   state.loadingRemove = true;
    //   state.error = null;
    // })
    // .addCase(removeProductFromCart.fulfilled, (state, action) => {
    //   console.log("action: ", action);
    //   // state.products = action.payload;
    //   state.loadingRemove = false;
    //   state.error = null;
    // })
    // .addCase(removeProductFromCart.rejected, (state, action) => {
    //   state.loadingRemove = false;
    //   state.error = action.error.message;
    // })
    // .addCase(updateProductInCart.pending, (state) => {
    //   state.loadingUpdate = true;
    //   state.error = null;
    // })
    // .addCase(updateProductInCart.fulfilled, (state, action) => {
    //   console.log("action: ", action);
    //   // state.products = action.payload;
    //   state.loadingUpdate = false;
    //   state.error = null;
    // })
    // .addCase(updateProductInCart.rejected, (state, action) => {
    //   state.loadingUpdate = false;
    //   state.error = action.error.message;
    // });
  },
});

export default cartSlice.reducer;
