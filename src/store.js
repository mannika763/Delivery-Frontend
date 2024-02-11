
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from "redux-thunk";
import { AllDataReducer } from './Components/Reducers/PizzaReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { CartReducer } from './Components/Reducers/CartReducer';
import { RegisterReducer } from './Components/Reducers/RegisterReducer';
import { loginUserReducer } from './Components/Reducers/RegisterReducer';


const currentUser = localStorage.getItem("currentUser")? JSON.parse(localStorage.getItem("currentUser")): null;
const rootReducer = combineReducers(
    {
        AllDataReducer:  AllDataReducer,
        CartReducer: CartReducer,
        RegisterReducer: RegisterReducer,
        loginUserReducer:loginUserReducer,
    }
);
const initialState={
   loginUserReducer: {
    currentUser: currentUser,
   }
  };
const middleware= [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
);

export default store;