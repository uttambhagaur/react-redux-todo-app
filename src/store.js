import { createStore, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { storage } from "redux-persist/lib/storage";
import autoMargeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { todos } from "./todos/reducers";

const reducers = {
  todos,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMargeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(persistedReducer);
// export const configureStore = () => createStore(rootReducer);
