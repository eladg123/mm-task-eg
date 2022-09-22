import React from 'react'
import { Product } from '../types/Product'

interface Props {
  availableProducts: Product[] | []
}

const ProductsGrid = ({ availableProducts }: Props) => {
  return (
    <div className="overflow-x-auto relative text-center content-center items-center mr-24">
      <table className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700">
        <thead>
          <tr>
            <th className="py-3 px-6 text-2xl">שם</th>
            <th className="py-3 px-6 text-2xl">מחיר</th>
          </tr>
        </thead>
        <tbody>
          {availableProducts.map((product: Product) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6 font-medium text-xl text-gray-900 whitesapce-nowrap dark:text-white">
                  {product.name}
                </td>
                <td className="py-4 px-6 font-medium text-xl text-gray-900 whitesapce-nowrap dark:text-white">
                  {product.price}₪
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsGrid
