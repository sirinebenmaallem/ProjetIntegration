import {GET_HOTELS} from "../types"
import {HotelService} from "../../services/Hotel-Service";
export const loadHotels=()=>{
 return (dispatch)=>{
    HotelService.fetchHotels()
 .then(res=>{
 dispatch({type:GET_HOTELS,payload:res.data})

 }).catch((error)=>console.log(error));

 }
} 
