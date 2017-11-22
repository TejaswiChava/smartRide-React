import {combineReducers} from 'redux';
import LoginReducer from './loginReducer';
import RiderTypeReducer from './riderTypeReducer'
const allReducers=combineReducers({

    loginuser:LoginReducer,
    ridertypes:RiderTypeReducer
});

export default allReducers; 