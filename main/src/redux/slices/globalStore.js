import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const initialState = {
  status: "idle",
  error: null,
  count: 1,
};

const GlobalStore = createSlice({
  name: "globalStore",
  initialState: initialState,
  reducers: {
    setCount: (state, action) => {
      console.log(action.payload)
      state.count += action.payload;
    },
  },
  extraReducers(builder) {},
});

export const { setCount } = GlobalStore.actions;

// export function AppShellStoreProvider({ children }) {
//   return <Provider store={store}>{children}</Provider>;
// }

export function useStore() {
  const countValue = useSelector((state) => state.globalStore.count);
  const dispatch = useDispatch();

  return {
    countValue,
    countChange: (data) => dispatch(setCount(data)),
  };
}

export default GlobalStore.reducer;
