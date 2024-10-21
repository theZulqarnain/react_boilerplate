import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  status: "idle"
}

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        console.log(action, "action pyld")
        state.status = "LOADING..."
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log(action, "action pyld")
        state.products = action.payload
        state.status = "IDLE..."
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log(action, "action pyld")
        state.status = "ERROR"
      })
  }
})

export const { fetchProducts } = productSlice.actions

export default productSlice.reducer

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products")
  const result = await data.json()
  console.log(result, "data")

  return result
})
