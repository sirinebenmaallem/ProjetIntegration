import {GET_MOYENDETRANSPORTS} from '../types'
const initialState={
 moyenDeTransports:[]
};
const moyenDeTransportsReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_MOYENDETRANSPORTS:
 return{
 ...state,
 moyenDeTransports:action.payload,

 };
 default: return state
 }
}
export default moyenDeTransportsReducers