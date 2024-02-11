
export const RegisterReducer= (state={}, action)=>{
// console.log("vv")
switch(action.type){
case "USER_REGISTER_REQUEST":
    return{
        loading: true
    }
    case "User_Register_Success":
        return{
            loading: false, success:true
        }
        case "User_Register_Fail":
            return{
                loading: false, error: action.payload
            }
 default: 
        return state;
}

}

export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
      case "USER_LOGIN_REQUEST":
        return {
          loading: true,
        };
      case "USER_LOGIN_SUCCESS":
        return {
          loading: false,
          success: true,
          currentUser: action.payload,
        };
      case "USER_LOGIN_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };