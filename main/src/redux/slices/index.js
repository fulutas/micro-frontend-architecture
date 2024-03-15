import globalStoreReducer from "./globalStore";
import {ProductStore} from 'product/ProductStore';

export default {
  globalStore: globalStoreReducer,
  productStore: ProductStore.reducer,
};