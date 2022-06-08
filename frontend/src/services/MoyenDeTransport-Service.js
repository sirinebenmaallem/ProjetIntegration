import Axios from "../Axios/Api";
const MOYENDETRANSPORT_API="/moyenDeTransports"
 const fetchMoyenDeTransports=async()=> {
 return await Axios.get(MOYENDETRANSPORT_API);
 }

 export const MoyenDeTransportService = {
 fetchMoyenDeTransports
 }