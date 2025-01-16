import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialValue: 101,
  dataProduct: [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: 'Electronics', price: '$199', stocked: true, name: 'iPhone' },
    { category: 'Electronics', price: '$99', stocked: true, name: 'Headphones' },
    { category: 'Electronics', price: '$254', stocked: true, name: 'radio' },
    { category: 'Electronics', price: '$1024', stocked: true, name: 'Computer' },
    { category: 'Furniture', price: '$399', stocked: false, name: 'Chair' },
    { category: 'Furniture', price: '$715', stocked: true, name: 'desk' },
    { category: 'Furniture', price: '$531', stocked: true, name: 'easy chair' },
    { category: 'Clothing', price: '$29', stocked: true, name: 'T-Shirt' },
    { category: 'Clothing', price: '$77', stocked: false, name: 'Pants' },
    { category: 'Clothing', price: '$43', stocked: true, name: 'shirt' },
  ],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setInitialValue: (state, payload) => {
      state.initialValue = payload
    },
  },
})

export const { setInitialValue } = productSlice.actions

export default productSlice.reducer