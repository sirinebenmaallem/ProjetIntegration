import {GET_VOYAGEORGANISES,DELETE_VOYAGEORGANISE,ADD_VOYAGEORGANISE,GET_SINGLE_VOYAGEORGANISE,UPDATE_VOYAGEORGANISE} from "../types"
import {VoyageOrganiseService} from "../../services/VoyageOrganise-Service";



export const loadVoyageOrganises=()=>{
 return (dispatch)=>{
 VoyageOrganiseService.fetchVoyageOrganises()
 .then(res=>{
 dispatch({type:GET_VOYAGEORGANISES,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
}


export const loadSinglevoyageOrganise=(_id)=>{
 return (dispatch)=>{
 VoyageOrganiseService.fetchVoyageOrganiseById(_id)
 .then((res)=>{
 dispatch({type:GET_SINGLE_VOYAGEORGANISE,
 payload:res.data});
 }).catch((error)=>console.log(error));

 }
}
export const addvoyageOrganise=(voyageOrganise)=>{
 return (dispatch)=>{
 VoyageOrganiseService.addVoyageOrganise(voyageOrganise)
 .then((res)=>{
 dispatch({type:ADD_VOYAGEORGANISE,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
}
export const deletevoyageOrganise=(_id)=>{
 return dispatch=>{
 VoyageOrganiseService.deleteVoyageOrganise(_id)
 .then((res)=>{
 dispatch({type:DELETE_VOYAGEORGANISE,
 payload:_id})
 }).catch((error)=>console.log(error));

 }
}
export const updatevoyageOrganise=(voyageOrganise)=>{
 return dispatch=>{
 VoyageOrganiseService.editVoyageOrganise(voyageOrganise)
 .then((res)=>{
 dispatch({type:UPDATE_VOYAGEORGANISE,payload:res.data})
 }).catch((error)=>console.log(error));

 }
}