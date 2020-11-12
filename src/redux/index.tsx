import { combineReducers, createStore } from "redux"
import languageReducer from "./language"
import formReducer from "./form"

const rootReducer = combineReducers({
  language: languageReducer,
  form: formReducer
})


const store = createStore(rootReducer)
store.subscribe(() => {
  console.log(store.getState())
})

export default store