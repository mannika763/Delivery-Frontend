
export const CartReducer=(state={cartItem:[]}, action)=>{

    switch(action.type){
        case "Add_to_cart":
 const AlreadyExist = state.cartItem.find((item)=> item._id===action.payload._id)

 if(AlreadyExist){
   return{
    ...state,
    cartItem: state.cartItem.map(item=> item._id === action.payload._id? action.payload: item)
   }

 }else{
        return{
             ...state,
             cartItem: [...state.cartItem, action.payload]
        }
    }

    case "Delete_from_cart":
        console.log("okay coing here")
        const updatedCart = state.cartItem.filter((item) => item._id !== action.payload._id);
        localStorage.setItem("cartItem", JSON.stringify(updatedCart));
        console.log("deleted dddddddddddd cart", updatedCart)
return {
  ...state,
  cartItem: updatedCart,
};
        default : return state

    }
    
}