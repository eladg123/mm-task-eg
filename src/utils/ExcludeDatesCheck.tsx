import { Product } from '../types/Product'
import { compareDate } from './CompareDate'

// Function that receives the products list and the user's selected date, and returns a
// filtered list after checking which products cannot be received on this selected date.

export const excludeDatesFilter = (
  productsList: Product[],
  selectedDate: Date,
): Product[] => {
  let filteredProducts: Product[] | [] = productsList.filter(
    (product: Product) => {
      for (const excludeDate of product.times.excludeDates) {
        if (compareDate(selectedDate, excludeDate.date)) {
          return false
        }
      }
      return true
    },
  )
  return filteredProducts
}
