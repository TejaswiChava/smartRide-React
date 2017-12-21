import {combineReducers} from 'redux';
import LoginReducer from './loginReducer';
import RiderTypeReducer from './riderTypeReducer'
import ticketfaretypesReducer from './ticketfaretypesReducer'
import vehicletierReducer from './vehicletiersReducer'
import stationsReducer from './stationsReducer'
import routesReducer from './routesReducer'
import vehiclesReducer from './vehiclesReducer'
import inspectorsReducer from './inspectorsReducer'
import passtypesReducer from './passtypesReducer'
import passsfaretypesReducer from './passfaretypeReducer'
import ticketfaregroupReducer from './ticketfaregroupsReducer'
import vehiclegroupReducer from './vehiclegroupReducer'
const allReducers=combineReducers({

    loginuser:LoginReducer,
    ridertypes:RiderTypeReducer,
    ticketfaretypes:ticketfaretypesReducer,
    vehicletier:vehicletierReducer,
    stations:stationsReducer,
    routes:routesReducer,
    vehicles:vehiclesReducer,
    inspectors:inspectorsReducer,
    passtypes:passtypesReducer,
    passfaretypes:passsfaretypesReducer,
    ticketfaregroup:ticketfaregroupReducer,
    vehiclegroup:vehiclegroupReducer
});

export default allReducers; 