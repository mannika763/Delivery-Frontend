import axios from "axios"

export const RegisterAction = (user) => async dispatch =>{
// console.log("see if here coming")
    dispatch({type: "USER_REGISTER_REQUEST"})
    try{
        console.log("see if here coming")
          const res = await axios.post('http://localhost:8080/api/sendData', user)
          console.log(res)
          dispatch({type: "User_Register_Success"})
    }
    catch(error){
      
        dispatch({type: "User_Register_Fail", payload: error})
    }
}

export const loginUser = (user) => async (dispatch) => {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    try {
      const response = await axios.post("http://localhost:8080/loginapi/login", user);
      // console.log(response);
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      window.location.href = "/";
    } catch (error) {
      dispatch({ type: "USER_LOGIN_FAIL", payload: error });
    }
  };

  export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };