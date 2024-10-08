import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"

export const fetchAllProducts = createAsyncThunk('products/fetchAll' , async() => { // 'products/fetchall is a type of action
    const response = await fetch("https://fakestoreapi.com/products");
   return await response.json();

} )


 const productsSlice  = createSlice({
    name : "products",
    initialState : {
        value : [],
        loading: false
    },
    extraReducers: (builder) => { // builder will alow us to have diff cases over here  as this is a promise based actions
        builder.addCase(fetchAllProducts.pending , (state) => {
            state.loading = true;
        }) // once the promise is resvoled we will update the state
        builder.addCase(fetchAllProducts.fulfilled , (state, action)=>{
            state.value = action.payload
            // console.log(state.value , 'statevalue')
        state.loading = false
      })
    },
 })

 export default productsSlice.reducer;