

export const addToCart =(pizza, quantity, varient)=> (dispatch,getState)=>{
console.log("sss",pizza)
    var cartItem={
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: Number(quantity),
        prices: pizza.prices,
        price: pizza.prices[0][varient]*quantity,
    };
  

    if (cartItem.quantity > 10) {
        alert("You can add up to 10 pizzas only");
    }
    else{
        if(cartItem.quantity<1){
            dispatch({ type: "Delete_from_cart", payload: pizza });
        }
        else{
           
            dispatch({type: "Add_to_cart", payload: cartItem});
            localStorage.setItem(
                "cartItem", JSON.stringify(getState().CartReducer.cartItem)
            );
        }
    }
   
   
};

export const Delete= (pizza)=> (dispatch, getState)=>{

    console.log("Deleting from cart:", pizza);
  dispatch({ type: "Delete_from_cart", payload: pizza });
  const cartItem = getState().CartReducer.cartItem;
  console.log("Updated cart:", cartItem);
    localStorage.setItem("cartItem", JSON.stringify(cartItem))
}