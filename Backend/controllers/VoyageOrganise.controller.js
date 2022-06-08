import mongoose from 'mongoose';
import VoyageOrganise from '../models/VoyageOrganise.model.js';
export const getVoyageOrganises = async (req, res) => {
 try {
 const cat = await VoyageOrganise.find().populate('organisateurs')
 .populate('moyenDeTransport')
 .populate('hotel');
;
 res.status(200).json(cat);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const getVoyageOrganiseByID = async (req, res) => {
 try {
 const v = await VoyageOrganise.findById(req.params.id).populate('organisateurs')
 .populate('moyenDeTransport')
 .populate('hotel');
 res.status(200).json(v);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const createVoyageOrganise = async (req, res) => {
 const {
titre,destination,prix,nbrPlacesLimite,couverture,moyenDeTransport,hotel,organisateurs } =req.body;

 const newVoyageOrganise = new VoyageOrganise({
    titre:titre,destination:destination,prix:prix,nbrPlacesLimite:nbrPlacesLimite,couverture:couverture,moyenDeTransport:moyenDeTransport,hotel:hotel,organisateurs:organisateurs})
 try {
 await newVoyageOrganise.save();
 res.status(201).json(newVoyageOrganise );
 } catch (error) {
 res.status(409).json({ message: error.message });
 }
}
export const updateVoyageOrganise= async (req, res) => {
 const { id } = req.params;
 const {titre,destination,prix,nbrPlacesLimite,couverture,moyenDeTransport,hotel,organisateurs } =req.body;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de voyage avec un id: ${id}`);
 const v1 = {
    titre:titre,destination:destination,prix:prix,nbrPlacesLimite:nbrPlacesLimite,couverture:couverture,moyenDeTransport:moyenDeTransport,hotel:hotel,organisateurs:organisateurs, _id: id
};
 await VoyageOrganise.findByIdAndUpdate(id, v1);
 res.json(v1);
}
export const deleteVoyageOrganise = async (req, res) => {
 const { id } = req.params;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de voyage avec l'ID: ${id}`);
 await VoyageOrganise.findByIdAndDelete(id);
 res.json({ message: "voyage supprimé avec succès." });
}