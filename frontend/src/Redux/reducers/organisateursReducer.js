import {GET_ORGANISATEURS} from '../types'
const initialState={
 organisateurs:[]
};
const organisateursReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_ORGANISATEURS:
 return{
 ...state,
 organisateurs:action.payload,

 };
 default: return state
 }
}
export default organisateursReducers 
