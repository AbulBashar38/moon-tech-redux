import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./rootReducer";
import cartCounter from "./middleware/cartCounter";
import thunk from "redux-thunk";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter, thunk))
);
export default store;
