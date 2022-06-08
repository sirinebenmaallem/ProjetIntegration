import { combineReducers } from "redux";
import voyageOrganisesReducers from "./voyageOrganisesReducer";
import hotelReducers from "./hotelsReducer";
import organisateursReducers from "./organisateursReducer";
import moyenDeTransportsReducers from "./moyenDeTransportsReducer"; 

const rootReducer= combineReducers({
 allvoyageOrganises:voyageOrganisesReducers,
 allhotels:hotelReducers,
 allorganisateurs:organisateursReducers,
 allmoyenDeTransports:moyenDeTransportsReducers,
});
export default rootReducer