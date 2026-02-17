import { legacy_createStore as createStore } from "redux";
import reducer from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);
// CreateStore crea el store de redux, como hemos visto en clase, y el persisStore lo que hace es que se almacene en el navegador
export const store = createStore(persistedReducer);
export const persistor = persistStore(store); 