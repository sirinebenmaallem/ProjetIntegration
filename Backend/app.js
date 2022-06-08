import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import organisateurRouter from "./routes/Organisateur.route.js"
import hotelRouter from "./routes/Hotel.route.js";
import moyenDeTransportRouter from "./routes/MoyenDeTransport.route.js";
import voyageOrganiseRouter from "./routes/VoyageOrganise.route.js";
import userRouter from "./routes/user.route.js";
//import userRouter from "./routes/user.route.js";
import clientRouter from "./routes/client.route.js";
import reservationRouter from "./routes/reservation.route.js";
import lignereservationRouter from "./routes/lignereservation.route.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});
app.use('/api/organisateurs', organisateurRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/MoyenDeTransports', moyenDeTransportRouter);
app.use('/api/VoyageOrganises', voyageOrganiseRouter); 
//app.use('/api/users',userRouter); 
app.use('/api/users', clientRouter);
app.use('/api/reservations', reservationRouter);
app.use('/api/lignesreservations', lignereservationRouter); 

app.get("/",(req,res)=>{
res.send("baseVoyage");
});
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });
