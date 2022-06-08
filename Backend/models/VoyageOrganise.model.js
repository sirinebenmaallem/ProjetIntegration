import mongoose from "mongoose"
var VoyageOrganiseSchema = mongoose.Schema({
 titre: {type: String, required: true},
 destination: {type: String, required: true},
 prix: {type: Number, required: true},
 nbrPlacesLimite: {type: Number, required: true},
 couverture: String ,
 moyenDeTransport: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'MoyenDeTransport'
 },
 hotel:[ {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Hotel'
 }],
 organisateurs: [{
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Organisateur'
 }]
})
const VoyageOrganise = mongoose.model('VoyageOrganise', VoyageOrganiseSchema);
export default VoyageOrganise