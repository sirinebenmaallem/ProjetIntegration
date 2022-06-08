import Axios from "../Axios/Api";
const ORGANISATEUR_API="/organisateurs"
 const fetchOrganisateurs=async()=> {
 return await Axios.get(ORGANISATEUR_API);
 }

 export const OrganisateurService = {
 fetchOrganisateurs
 }