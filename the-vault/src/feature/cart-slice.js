import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        value : []
    },
    reducers : {
        addToCart(state , action){
            const {product , quantity} = action.payload;
            const existingItem =  state.value.find(({product : prod}) => prod.id === product.id)
            if(existingItem){
                existingItem.quantity += quantity
            }else {

                state.value.push(action.payload) 
                //  In Redux, action.payload refers to the data or information that an action carries when it's dispatched to a reducer.

            }
        },
        removeFromCart(state , action){
            const {product} = action.payload
            const index = state.value.findIndex(({product : prod}) => prod.id === product.id)
            if(index > -1){
                const existingItem = state.value[index]
              if(existingItem.quantity === 1){
                state.value.splice(index , 1)}
                else {
                    existingItem.quantity -= 1
                }
               
            }
        }
    }
})

export const {addToCart , removeFromCart} = cartSlice.actions
console.log(cartSlice)
export default cartSlice.reducer