import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
function Dashboard() {
 return (

 <div>
 <AppBar position="static" color='warning'>
 <Toolbar>
 <Button color="inherit"><Link to="/listreservations"
style={{"color":"white", "textDecoration":"none" , borderRadius: '50%'}}>Liste
Reservations</Link></Button>
<Button color="inherit"><Link to="/voyageOrganises"
style={{"color":"white", "textDecoration":"none" , borderRadius: '50%'}}>Ajout</Link></Button>
 
 
 
 </Toolbar>
 </AppBar>

 </div>

 );
 }
export default Dashboard; 