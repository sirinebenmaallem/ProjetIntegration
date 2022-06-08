import {GET_HOTELS} from '../types'
const initialState={
 hotels:[]
};
const hotelsReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_HOTELS:
 return{
 ...state,
 hotels:action.payload,

 };
 default: return state
 }
}
export default hotelsReducers 