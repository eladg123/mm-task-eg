import { ProductsActions } from '../actions/ProductsIndex'
import { ProudctActionTypes } from '../constants-types/ProductsIndex'
import { Product } from '../../types/Product'
import { Dispatch } from 'react'
import dictionary from '../../dictionary/dictionary.json'
import { excludeDatesFilter } from '../../utils/ExcludeDatesCheck'
import json from '../../data/data.json'
import { availableDaysFilter } from '../../utils/AvailabaleDaysFilter'
import { makeDaysFilter } from '../../utils/MakeDaysCheck'

// Function that recevies the user's selected date and returns a filtered list after
// some filter and calculate operations to check which products can be provided at
// the user's selected date.

export const filterProductsBySelectedDate = (selectedDate: Date) => {
  return (dispatch: Dispatch<ProductsActions>) => {
    try {
      const filterProductsByExcludeDates: Product[] | [] = excludeDatesFilter(
        json.data,
        selectedDate,
      )
      if (filterProductsByExcludeDates.length === 0) {
        dispatch({
          type: ProudctActionTypes.FILTER_PRODUCTS,
          payload: [],
        })
      } else {
        const filteredProductsByAvailableDays:
          | Product[]
          | [] = availableDaysFilter(filterProductsByExcludeDates, selectedDate)
        if (filteredProductsByAvailableDays.length === 0) {
          dispatch({
            type: ProudctActionTypes.FILTER_PRODUCTS,
            payload: [],
          })
        } else {
          const finalFilteredProducts = makeDaysFilter(
            filteredProductsByAvailableDays,
            selectedDate,
          )
          dispatch({
            type: ProudctActionTypes.FILTER_PRODUCTS,
            payload: finalFilteredProducts,
          })
        }
      }
    } catch (error) {
      dispatch({
        type: ProudctActionTypes.ADD_ERROR,
        payload: dictionary.noProductsForThisDateErr,
      })
    }
  }
}
