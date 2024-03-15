import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { store } from "../store";

const initialState = {
  status: "idle",
  error: null,
  productName: "Product 1",
};

const ProductStore = createSlice({
  name: "productStore",
  initialState: initialState,
  reducers: {
    setProductName: (state, action) => {
      state.productName = action.payload;
    },
  },
  extraReducers(builder) {},
});

export const { setProductName } = ProductStore.actions;

export function useStore() {
  const productNameValue = useSelector((state) => state.productStore.productName);
  const dispatch = useDispatch();

  return {
    productNameValue,
    productNameChange: (data) => dispatch(setProductName(data)),
  };
}

export { ProductStore };
