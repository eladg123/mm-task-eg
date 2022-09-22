import { Product } from '../types/Product'
import { compareDate } from './CompareDate'

// Function that recevies the makeDays and the selected date and returns the calculate
// the first available provided date.

export const calculateFirstProvidedDate = (makeDays: number): Date => {
  const firstProvidedDate = new Date()
  firstProvidedDate.setDate(firstProvidedDate.getDate() + makeDays)
  return firstProvidedDate
}

// Function that receives the products list and the user's selected date, and returns a
// filtered list after calculate if the first available provided date is before/equal the selected date,
// if true this product can be provided on this selected date, else this product will be removed
// from the list.

export const makeDaysFilter = (
  productsList: Product[],
  selectedDate: Date,
): Product[] => {
  const filteredProducts = productsList.filter((product: Product) => {
    const firstProvidedDate: Date = calculateFirstProvidedDate(
      product.times.makeDays,
    )
    console.log(
      firstProvidedDate,
      selectedDate,
      firstProvidedDate.getTime() - selectedDate.getTime(),
      product.name,
    )
    if (
      firstProvidedDate.getTime() < selectedDate.getTime() ||
      compareDate(firstProvidedDate, selectedDate)
    ) {
      return true
    } else {
      return false
    }
  })

  return filteredProducts
}
