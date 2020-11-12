import { combineReducers, createStore } from 'redux'
import languageReducer from './language'
import formReducer from './form'
import sortByReducer from './sortBy'

const rootReducer = combineReducers({
  language: languageReducer,
  form: formReducer,
  sortBy: sortByReducer,
})


const store = createStore(rootReducer)
store.subscribe(() => {
  console.log(store.getState())
})

export default store