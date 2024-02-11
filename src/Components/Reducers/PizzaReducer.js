
export const AllDataReducer = (state={data: []}, action)=>{
    switch(action.type){

        case "Get_Api_Req":
            return {...state,
             loading:true
            };
         case "Get_Api_Successfully":
          return {
            data: action.payload,
                loading: false
        }
        case "Get_Api_Fail":
                    return {
                        err: action.payload,
                        loading: false
                    }
        default: 
                    return state;
    }
           
}