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
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
  loadingFertch: false,
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
    builder.addCase();
  },
});
