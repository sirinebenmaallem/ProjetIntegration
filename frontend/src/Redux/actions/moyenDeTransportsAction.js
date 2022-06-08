import {GET_MOYENDETRANSPORTS} from "../types"
import {MoyenDeTransportService} from "../../services/MoyenDeTransport-Service";
export const loadMoyenDeTransports=()=>{
 return (dispatch)=>{
    MoyenDeTransportService.fetchMoyenDeTransports()
 .then(res=>{
 dispatch({type:GET_MOYENDETRANSPORTS,payload:res.data})

 }).catch((error)=>console.log(error));

 }
} 
