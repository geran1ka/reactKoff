import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../const/const";

export const submitCartForm = createAsyncThunk(
  "formCart/submitCartForm",
  async (formData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${URL_API}api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // eslint-disable-next-line quote-props
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Ошибка приотправке данных заказа");
      }

      const responseData = await response.json();
      return responseData.orderId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  loading: false,
  error: null,
  success: false,
  orderId: null,
};

const formCartSlice = createSlice({
  name: "formCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitCartForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitCartForm.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.orderId = action.payload;
      })
      .addCase(submitCartForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.success = false;
      });
  },
});

export default formCartSlice.reducer;
