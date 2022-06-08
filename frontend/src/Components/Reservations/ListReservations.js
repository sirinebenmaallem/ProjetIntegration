import Axios from "../../Axios/Api"
import {useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import MUIDataTable from "mui-datatables";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const style = {
 position: 'absolute',
 top: '20%',
 left: '40%',
 transform: 'translate(-50%, -50%)',
 width: 500,
 bgcolor: 'background.paper',
 border: '2px solid #000',
 boxShadow: 24,
 p: 4,
};
function ListReservations() {
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
 const [listRes,setListRes]=useState([]);
 const [listLigRes,setListLigRes]=useState([]);

 useEffect(()=>{
 Axios.get("/reservations/").then((res)=>{
    setListRes(res.data);
 });
 },[]);
const lignes=(id)=>{
 Axios.get(`/lignesreservations/res/${id}`).then((res)=>{
 setListLigRes(res.data)
 });
 }

 const columns = [
 {
 label: "Reservation",
 name: "_id",
 options: {
 customBodyRender : (value) => (
 <Button onClick={()=>{lignes(value);handleOpen()}}>
 Détail Commande
 </Button>
 )
 }
 },
 {
 label: "Client",
 name: "refclient",
 options: {
 customBodyRender : (client) => (
 client.nom
 )
 }
 },
 {
 label: "Total",
 name: "total"
 }
 ]


 return (
 <>
 <div>

 <ThemeProvider theme={createTheme()}>
 <MUIDataTable
 title="Liste des Reservations"
 data={listRes}
 columns={columns}

 />
 </ThemeProvider>

 <Modal
 open={open}
 onClose={handleClose}
 >
 <Box sx={style}>
 {
 listLigRes?
 listLigRes.map((lig,ind)=>{
 return (<div key={ind}>
 <div><img src={"images/"+lig.refarticle.couverture} alt=""
width="40" />{lig.refarticle.titre} {lig.refarticle.titre} Quantité :
{lig.nbrPlacesLimite} Total : {lig.totligne}</div>
 </div>)
 }):null
 }
 </Box>
 </Modal>
 </div>

 </>
 );
 }
export default ListReservations; 