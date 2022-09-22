import { ProductsActions } from '../actions/ProductsIndex'
import { ProudctActionTypes } from '../constants-types/ProductsIndex'
import { Product } from '../../types/Product'
import json from '../../data/data.json'

export type ProductsStateType = {
  products: Product[]
  availableProducts: Product[] | []
  errMsg: string
}

export const ProductsReducer = (
  state: ProductsStateType = {
    products: json.data,
    errMsg: '',
    availableProducts: [],
  },
  action: ProductsActions,
) => {
  switch (action.type) {
    case ProudctActionTypes.FILTER_PRODUCTS:
      return { ...state, availableProducts: action.payload }
    case ProudctActionTypes.ADD_ERROR:
      return { ...state, errMsg: action.payload }
    default:
      return state
  }
}
