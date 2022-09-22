import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import dictionary from '../dictionary/dictionary.json'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { filterProductsBySelectedDate } from '../state/action-creators/ProductsActionCreators'
import { ProductsStateType } from '../state/reducers/ProductsReducer'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../css/home.css'
import ProductsGrid from '../components/ProductsGrid'
import ErrorMessage from '../components/ErrorMessage'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const actionCreators = { filterProductsBySelectedDate }
  const relevantFunctions = bindActionCreators(actionCreators, dispatch)
  const productsState: ProductsStateType = useSelector(
    (state: RootState) => state.products,
  )
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  //create end date
  const calculateEndDate = (limit: number) => {
    let endDate = new Date()
    endDate.setDate(endDate.getDate() + limit)
    return endDate
  }

  useEffect(() => {
    relevantFunctions.filterProductsBySelectedDate(selectedDate)
  }, [selectedDate])
  return (
    <div className="items-center mt-20 flex flex-col">
      <div className="items-center flex flex-row-reverse mr-24  mb-10">
        <div className="text-lg font-medium text-gray-900 dark:text-white text-center">
          {dictionary.recommmandToSelectDate}
        </div>
        <div className="text-center items-center border-b border-solid">
          <DatePicker
            className="date-picker"
            minDate={new Date()}
            maxDate={calculateEndDate(14)}
            selected={selectedDate}
            onChange={(date: Date) => setSelectedDate(date)}
          />
        </div>
      </div>
      {productsState.availableProducts.length > 0 ? (
        <ProductsGrid availableProducts={productsState.availableProducts} />
      ) : (
        <ErrorMessage errMsg={dictionary.noProductsForThisDateErr} />
      )}
    </div>
  )
}

export default HomeScreen
