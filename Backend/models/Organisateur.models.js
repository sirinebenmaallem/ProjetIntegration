import mongoose from "mongoose"
var organisateurSchema = mongoose.Schema({
    nomorg:String,
    prenomorg:String,
    email: String,
    numtel: String
});
const Organisateur = mongoose.model('Organisateur', organisateurSchema);
export default Organisateur