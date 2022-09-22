import { Product } from '../types/Product'

// Function that receives the products list and the user's selected date, and returns a
// filtered list after checking which products can be ordered on this day.

export const availableDaysFilter = (
  productsList: Product[],
  selectedDate: Date,
): Product[] => {
  let filteredProducts: Product[] | [] = productsList.filter(
    (product: Product) => {
      for (const availableDay of product.times.availableDaysOfWeek) {
        if (selectedDate.getDay() + 1 === availableDay) {
          return true
        }
      }
      return false
    },
  )
  return filteredProducts
}
