import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"

export const fetchAllCategories = createAsyncThunk('categories/fetchAll' , async() => { // 'products/fetchall is a type of action
    const response = await fetch("https://fakestoreapi.com/products/categories");
   return await response.json();

} )


const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        value: [],
        loading : false,
    },
    extraReducers: (builder) => { // builder will alow us to have diff cases over here  as this is a promise based actions
        builder.addCase(fetchAllCategories.pending , (state) => {
            state.loading = true;
        }) // once the promise is resvoled we will update the state
        builder.addCase(fetchAllCategories.fulfilled , (state, action)=>{
            state.value = action.payload
            // console.log(state.value , 'statevalue')
        state.loading = false
      })
    },
})

export default categoriesSlice.reducer