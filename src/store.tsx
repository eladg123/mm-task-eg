import {
  createStore,
  combineReducers,
  applyMiddleware,
  Store,
  Middleware,
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { ProductsReducer } from './state/reducers/ProductsReducer'

const rootReducer = combineReducers({
  products: ProductsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const initialState: Object = {}

const middleware: Middleware[] = [thunk]

const store: Store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
