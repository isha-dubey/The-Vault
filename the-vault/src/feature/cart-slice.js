import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        value : []
    },
    reducers : {
        addToCart(state , action){
            console.log(action)
            state.value.push(action.payload) 
          //  In Redux, action.payload refers to the data or information that an action carries when it's dispatched to a reducer.
        }
    }
})

export const {addToCart} = cartSlice.actions
console.log(cartSlice)
export default cartSlice.reducer