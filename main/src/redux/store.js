import { combineReducers, configureStore } from '@reduxjs/toolkit'

/** REDUCERS **/
import rootReducer from './slices'

const store = configureStore({
  reducer: combineReducers({
    ...rootReducer,
  }),
})


export { store }
