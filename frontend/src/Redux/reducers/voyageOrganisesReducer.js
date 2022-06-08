import {GET_VOYAGEORGANISES,DELETE_VOYAGEORGANISE,ADD_VOYAGEORGANISE,GET_SINGLE_VOYAGEORGANISE,UPDATE_VOYAGEORGANISE} from '../types'
const initialState={
voyageOrganises:[],
voyageOrganise:{}

};
const voyageOrganisesReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_VOYAGEORGANISES:
 return{
 ...state,
 voyageOrganises:action.payload,

 };
 case ADD_VOYAGEORGANISE:
 return{
 ...state,
 voyageOrganises : [...state.voyageOrganises, action.payload],
 voyageOrganise:action.payload
 };
 case DELETE_VOYAGEORGANISE:
 return{
 ...state,
 voyageOrganises: state.voyageOrganises.filter(voyageOrganise=> voyageOrganise._id !==action.payload)
 };
 case UPDATE_VOYAGEORGANISE:
 return {
 ...state,
 voyageOrganises:state.voyageOrganises.map(voyageOrganise => voyageOrganise._id ===action.payload._id ? (voyageOrganise = action.payload) : voyageOrganise)
 };
 case GET_SINGLE_VOYAGEORGANISE:
 return { ...state,voyageOrganise:action.payload };
 default: return state
 }
}
export default voyageOrganisesReducers