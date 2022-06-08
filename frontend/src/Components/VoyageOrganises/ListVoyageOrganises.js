import React, { useEffect } from "react";
import {useDispatch } from "react-redux";
import {loadVoyageOrganises} from "../../Redux/actions/voyageOrganisesAction.js"
import AfficheVoyageOrganises from "./AfficheVoyageOrganises.js"
const ListVoyageOrganises=()=>{
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(loadVoyageOrganises());
    });

    return(
    <div><AfficheVoyageOrganises/></div>
 )
}

export default ListVoyageOrganises