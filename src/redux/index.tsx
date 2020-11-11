import { combineReducers, createStore } from "redux"
import languageReducer from "./language"

const rootReducer = combineReducers({
  language: languageReducer,
})


const store = createStore(rootReducer)
store.subscribe(() => {
  console.log(store.getState())
})

export default store