import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {useDispatch,useSelector} from "react-redux";
import {deletevoyageOrganise} from "../../Redux/actions/voyageOrganisesAction";
import { Link, useNavigate } from 'react-router-dom';
const AffichevoyageOrganises=()=>{

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const handleDelete=(id)=>{
 if(window.confirm("supprimer le voyage O/N")) {
 dispatch(deletevoyageOrganise(id));
 navigate("/");
 }
}
 const voyageOrganises = useSelector((state) =>state.allvoyageOrganises.voyageOrganises);
 console.log(voyageOrganises);

 return(
    <>
    <Button variant="contained" color="success" size="medium">
    <Link to={"/addVoyageOrganises/"}
    style={{"textDecoration":"none","color":"white"}}>
    Ajout
    </Link>
    </Button>
    <Grid container spacing={2} columns={15} marginTop={10}>
    {voyageOrganises.map((row) => ( 
    <Grid item xs={5} key={row._id}>
    <Card sx={{ maxWidth: 250 }} key={row._id}>
    <CardMedia
    component="img"
    height={230}
    image={"images/"+row.couverture}
    alt={row.titre}
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    {row.titre}
    </Typography>
    <Typography variant="body2" color="text.secondary">
    {row.prix} TND
    </Typography>
    
    <Typography variant="body2" color="text.secondary">
    {row.hotel.nomhotel} 
    </Typography>
    

    </CardContent>
    
    <CardActions>
    <Link to={"/editVoyageOrganises/" + row._id}
style={{"textDecoration":"none","color":"white"}}> 
<Button variant="contained"
color="primary" size="small">Modifier</Button></Link>

    <Button variant="contained" color="error" size="small"
    onClick={()=>handleDelete(row._id)}>Supprimer</Button>
    </CardActions>
    </Card>
    </Grid>
    )
    )
    }
   
    </Grid>
    </>
    )
} 

export default AffichevoyageOrganises