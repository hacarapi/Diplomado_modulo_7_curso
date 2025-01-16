import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialValue: 101,
  dataProduct: [ 
    { category: 'Electronics', price: '$199', stocked: true, name: 'iPhone' },
    { category: 'Electronics', price: '$99', stocked: true, name: 'Headphones' },
    { category: 'Electronics', price: '$254', stocked: true, name: 'radio' },
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