import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {addvoyageOrganise} from "../../Redux/actions/voyageOrganisesAction";
import {loadMoyenDeTransports} from "../../Redux/actions/moyenDeTransportsAction";
import {loadOrganisateurs} from "../../Redux/actions/organisateursAction";
import {loadHotels} from "../../Redux/actions/hotelsAction";
import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
const AjoutVoyageOrganise=()=>{
 const [titre, setTitre] = useState("");
 const [destination, setDestination] = useState("");
 const [prix, setPrix] = useState("");
 const [nbrPlacesLimite, setNbrPlacesLimite] = useState("");
 const [moyenDeTransport, setMoyenDeTransport] = useState("");
 const [hotel, setHotel] = useState([]);
 const [organisateurs, setOrganisateurs] = useState([]);
 const [files, setFiles] = useState("")

 const dispatch = useDispatch();
 const navigate = useNavigate();
 useEffect(() => {
 dispatch(loadMoyenDeTransports());
 dispatch(loadOrganisateurs());
 dispatch(loadHotels());
 },[dispatch]);
 const moyenDeTransports = useSelector((state)=>state.allmoyenDeTransports.moyenDeTransports);
 const Organisateurs = useSelector((state) =>state.allorganisateurs.organisateurs);
 const Hotels = useSelector((state) =>state.allhotels.hotels);




 const handleSubmit = async(event)=> {
 event.preventDefault();
 const v={
 titre:titre,
 destination:destination,
 prix:prix,
 nbrPlacesLimite:nbrPlacesLimite,
 couverture : files[0].file.name,
 moyenDeTransport:moyenDeTransport,
 hotel:hotel,
 organisateurs:organisateurs
 };
 dispatch(addvoyageOrganise(v));
 navigate("/");
 }
 return (

 <div className="container">

 <form style={{ marginLeft: 8}}>
 <div>
 <Button variant="contained"
onClick={(event)=>handleSubmit(event)}>Ajout</Button>
 </div>
 <FormControl>

 <TextField
 variant="outlined"
label="Titre"
value={titre}
 onChange={e => setTitre(e.target.value)}
 required />
 <TextField
 variant="outlined"
label="Destination"
value={destination}
 onChange={e => setDestination(e.target.value)}
 />
 <TextField
 variant="outlined"
type="Number"
label="Prix"
value={prix}
 onChange={e => setPrix(e.target.value)}
 />
 <TextField
 variant="outlined"
type="Number"
label="NbrPlacesLimite"
value={nbrPlacesLimite}
 onChange={e => setNbrPlacesLimite(e.target.value)}
 />
 <TextField
 variant="outlined"
 select
 label="MoyenDeTransport"
 value={moyenDeTransport}
 helperText="Sélectionner un moyen de transport"
 onChange={e => setMoyenDeTransport(e.target.value)}
 >
 {
 moyenDeTransports ?
 moyenDeTransports.map((h)=>
 <MenuItem key={h._id}
value={h._id}>{h.nomsmoyenT}</MenuItem>
 ):null
 }
 </TextField>
 <TextField
 variant="outlined"
 select
 label="Organisateur"
 value={organisateurs}
 helperText="Sélectionner un organisateur"
 onChange={e => setOrganisateurs(e.target.value)}
 >
 {
 Organisateurs ?
 Organisateurs.map((org)=>
 <MenuItem key={org._id}
value={org._id}>{org.prenomorg}</MenuItem>
 )
 :null
 }
 </TextField>
 <TextField
 variant="outlined"
 select
 label="hotels"
 SelectProps={{multiple: true}}
 value={hotel}
 helperText="Sélectionner un hotel"
 onChange={e => setHotel(e.target.value)}
 >
 {
 Hotels ?
 Hotels.map((aut)=>
 <MenuItem key={aut._id}
value={aut._id}>{aut.nomhotel}</MenuItem>
 )
 :null
 }
 </TextField>
 </FormControl>
 </form>

 <h4>Télécharger Image</h4>
 <FormControl>
 <div style={{width:300, height:50}}>
 <FilePond
 files={files}
 allowMultiple={false}
 onupdatefiles={setFiles}
 labelIdle='<span class="filepond--label-action">Browse
One</span>'
 />
 </div>
 </FormControl>
 </div>
 );}
export default AjoutVoyageOrganise 
