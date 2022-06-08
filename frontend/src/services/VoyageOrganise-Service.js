import Axios from "../Axios/Api";
const VoyageOrganise_API="/VoyageOrganises"
 const fetchVoyageOrganises=async()=> {
 return await Axios.get(VoyageOrganise_API);
 }
 const fetchVoyageOrganiseById=async(voyageOrganiseId)=> {
 return await Axios.get(VoyageOrganise_API + '/' + voyageOrganiseId);
 }
 const deleteVoyageOrganise=async(voyageOrganiseId) =>{
 return await Axios.delete(VoyageOrganise_API + '/' +voyageOrganiseId);
 }
 const addVoyageOrganise=async(voyageOrganise)=> {
 return await Axios.post(VoyageOrganise_API, voyageOrganise);

 }
 const editVoyageOrganise=(voyageOrganise) =>{
 return Axios.put(VoyageOrganise_API + '/' + voyageOrganise._id, voyageOrganise);

 }

 export const VoyageOrganiseService = {
 fetchVoyageOrganises,
 fetchVoyageOrganiseById,
 deleteVoyageOrganise,
 addVoyageOrganise,
 editVoyageOrganise
 }