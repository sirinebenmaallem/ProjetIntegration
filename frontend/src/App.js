import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';
import ListVoyageOrganises from './Components/VoyageOrganises/ListVoyageOrganises.js';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AjoutVoyageOrganise from './Components/VoyageOrganises/AjoutVoyageOrganise.js'; 
import EditVoyageOrganise from './Components/VoyageOrganises/EditVoyageOraganise.js';
import Login from './Authentification/Login.js';
import ListCards from './Components/Client/ListCards'; 
import { CartProvider } from "react-use-cart";
import CartProduct from './Components/Client/CartProduct'; 
import Registration from './Components/Client/Registration';
import LoginClient from './Components/Client/LoginClient'; 
import ListReservations from './Components/Reservations/ListReservations';
import Dashboard from './Components/Admin/Dashboard'; 
function App() {
return (
<CartProvider>
 <Router>
 <Box sx={{ flexGrow: 1 }}>
 <AppBar position="static">
 <Toolbar>
 <IconButton
 size="large"
 edge="start"
 color="inherit"
 aria-label="menu"
 sx={{ mr: 2 }}
 >
 </IconButton>
 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
 Voyager
 </Typography>
<Link to="/"><Button color="error">Liste des voyages Organisées</Button></Link>

 </Toolbar>
 </AppBar>
 </Box>
 <Routes>
 <Route path="/" element={<ListCards/>}></Route>
 <Route path="/register" element={<Registration/>}></Route>
 <Route path="/loginclient" element={<LoginClient/>}></Route>
 <Route path="/admin" element={<Login/>}></Route>
 <Route exact path="/voyageOrganises" element={<ListVoyageOrganises/>}></Route>
 <Route path="/addVoyageOrganises" element={<AjoutVoyageOrganise/>}></Route>
 <Route path="/editVoyageOrganises/:_id" element={<EditVoyageOrganise/>}></Route>
 <Route path="/cart" element={<CartProduct/>}></Route>
 <Route path="/listreservations" element={<ListReservations/>}></Route>
<Route path="/dashboard" element={<Dashboard/>}></Route>
 </Routes>
 </Router>
</CartProvider>
 );
}
export default App;
