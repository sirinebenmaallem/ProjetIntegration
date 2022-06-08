import React, { useState, useEffect } from "react";
import {useNavigate,useParams } from "react-router-dom";
import {loadSinglevoyageOrganise,updatevoyageOrganise} from "../../Redux/actions/voyageOrganisesAction.js";
import {loadMoyenDeTransports} from "../../Redux/actions/moyenDeTransportsAction.js";
import {loadOrganisateurs} from "../../Redux/actions/organisateursAction.js";
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
const EditVoyageOrganise=()=>{
 const [state, setState] = useState({
 titre: "", destination:"",
 prix:"",nbrPlacesLimite:"",moyenDeTransport:"",
 hotel:"",organisateurs:[]
 });

 const [org, setOrg] = useState([])
 const [files, setFiles] = useState("")

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const params = useParams();
 const _id=params._id;
 useEffect(() => {
 dispatch(loadSinglevoyageOrganise(_id));
 dispatch(loadMoyenDeTransports());
 dispatch(loadOrganisateurs());
 dispatch(loadHotels());
 setFiles("");
 },[_id,dispatch]);

 const voyageOrganise = useSelector((state) => state.allvoyageOrganises.voyageOrganise);
 const moyenDeTransports = useSelector((state)=>state.allmoyenDeTransports.moyenDeTransports);
 const Organisateurs = useSelector((state) =>state.allorganisateurs.organisateurs);
 const Hotels = useSelector((state) =>state.allhotels.hotels);


 useEffect(()=>{
 setState(voyageOrganise);
 setFiles(voyageOrganise.couverture)
 },[voyageOrganise]);
 const handleSubmit = async(event)=> {
 event.preventDefault();
 const v={
 _id:_id,
 titre:state.titre,
 destination:state.destination,
 prix:state.prix,
 nbrPlacesLimite:state.nbrPlacesLimite,
 couverture : files[0].file.name,
 moyenDeTransport:state.moyenDeTransport,
 hotel:state.hotel,
 organisateurs:org.length>0?org:state.organisateurs
 };
 dispatch(updatevoyageOrganise(v));
 navigate("/");
 }
 const handelInputChange=(e)=>{
 const {name,value}=e.target;
 setState({...state,[name]:value});
 }
 const labelmoyenDeTransport=()=>{
 if( state.moyenDeTransport){
 if( state.moyenDeTransport.nomsmoyT) return "MoyenDeTransport :"+state.moyenDeTransport.nomsmoyT
 }
 else return null
 }
 const labelhotel=()=>{
 if( state.hotel){
 if( state.hotel.nomhotel) return "hotel :"+state.hotel.nomhotel
 }
 else return null
 }
 const labelorganisateur=()=>{
 if(state.organisateurs) {
 let ch=""
 state.organisateurs.map((aut)=>{
 if(aut.prenomorg)
 ch = ch+aut.prenomorg
 })
 return ch
 }
 else return null
 }
 const handleOrganisateurs=(event)=>{setState({...state,"organisateurs": []});

 setOrg(event.target.value);

 }
 return (

 <div className="container">

 <form style={{ marginLeft: 8}}>
 <div>
 <Button color="secondary" variant="contained"
onClick={(event)=>handleSubmit(event)}>Modifier</Button>
 </div>
 <FormControl>

 <TextField name="titre"
 variant="outlined"
label="Titre"
value={state.titre}
 onChange={handelInputChange}
 required
style={{ margin: 10}}/>
 <TextField name="destination"
 variant="outlined"
label="destination"
value={state.destination}
 onChange={handelInputChange}
 style={{ margin: 10}}/>

 <TextField name="prix"
 variant="outlined"
type="Number"
label="Prix"
value={state.prix}
 onChange={handelInputChange}
 style={{ margin: 10}}/>

 <TextField name="nbrPlacesLimite"
 variant="outlined"
type="Number"
label="NbrPlacesLimite"
value={state.nbrPlacesLimite}
 onChange={handelInputChange}
 style={{ margin: 10}}/>

 <TextField name="specialite"
 variant="outlined"
 select
 helperText="Sélectionner un moyen de Transport"
 label={labelmoyenDeTransport()}
 value={state.moyenDeTransport}
 onChange={handelInputChange}
 style={{ margin: 10}}>

 {
 moyenDeTransports ?
 moyenDeTransports.map((spec)=>
 <MenuItem key={spec._id}
value={spec._id}>{spec.nomsmoyenT}</MenuItem>
 )
 :null
 }
 </TextField>
 <TextField name="hotel"
 variant="outlined"
 select
 helperText="Sélectionner un hotel"
 label={labelhotel()}
 value={state.hotel}
 onChange={handelInputChange}
 style={{ margin: 10}}>

 {
 Hotels ?
 Hotels.map((edi)=>
 <MenuItem key={edi._id}
value={edi._id}>{edi.nomhotel}</MenuItem>
 )
 :null
 }
 </TextField>
 <TextField
 name="organisateurs"
 variant="outlined"
 select
 label={labelorganisateur()}
 SelectProps={{multiple: true}}
 value={org?org:state.organisateurs}
 helperText="Sélectionner des organisateurs"
 onChange={(event)=>handleOrganisateurs(event)}
 >
 {
 Organisateurs ?
 Organisateurs.map((aut)=>
 <MenuItem key={aut._id}
value={aut._id}>{aut.prenomorg}</MenuItem>
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
export default EditVoyageOrganise