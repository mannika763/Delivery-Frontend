import axios from "axios";


export const AllData =()=> async (dispatch) =>{
    dispatch({type: "Get_Api_Req"});

    try{
             const res = await axios.get('http://localhost:8080/getData');
            //  console.log(res);
             dispatch({type: "Get_Api_Successfully", payload: res.data})
    }
    catch(err){
                dispatch({type: "Get_Api_Fail", payload: err})
    }

}