import {GET_ORGANISATEURS} from "../types"
import {OrganisateurService} from "../../services/Organisateur-Service";
export const loadOrganisateurs=()=>{
 return (dispatch)=>{
    OrganisateurService.fetchOrganisateurs()
 .then(res=>{
 dispatch({type:GET_ORGANISATEURS,payload:res.data})

 }).catch((error)=>console.log(error));

 }
} 
