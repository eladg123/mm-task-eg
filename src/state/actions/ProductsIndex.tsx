import { Product } from '../../types/Product'
import { ProudctActionTypes } from '../constants-types/ProductsIndex'

interface actionFilterProducts {
  type: ProudctActionTypes.FILTER_PRODUCTS
  payload: Product[]
}

interface actionAddError {
  type: ProudctActionTypes.ADD_ERROR
  payload: string
}

export type ProductsActions = actionFilterProducts | actionAddError
