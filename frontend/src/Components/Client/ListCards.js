import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {loadVoyageOrganises} from "../../Redux/actions/voyageOrganisesAction"
import AfficheCards from "./AfficheCards"
const ListCards=()=>{

 const dispatch = useDispatch();

 useEffect(() => {
 dispatch(loadVoyageOrganises());
 });


 return(

 <div><AfficheCards/></div>
 )
}
export default ListCards 