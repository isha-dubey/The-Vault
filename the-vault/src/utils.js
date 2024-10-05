export function getItemCount(cartITems){
    console.log(cartITems)
    return cartITems.reduce((sum , cartItem) => cartItem.quantity+sum , 0
    )
}