import mongoose from 'mongoose';
import Organisateur from '../models/Organisateur.models.js';
export const getOrganisateurs = async (req, res) => {
try {
const cat = await Organisateur.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getOrganisateurByID = async (req, res) => {
try {
const cat = await Organisateur.findById(req.params.id);
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createOrganisateur= async (req, res) => {
const { nomorg,prenomorg,email,numtel} = req.body;
const newOrganisateur = new Organisateur({ nomorg:nomorg, email:email,
    prenomorg:prenomorg ,numtel:numtel })
try {
await newOrganisateur.save();
res.status(201).json(newOrganisateur );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateOrganisateur= async (req, res) => {
const { id } = req.params;
const { nomorg,prenomorg,email,numtel} = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas d'Organisateur avec un id: ${id}`);
const org1 = { nomorg:nomorg,prenomorg:prenomorg, email:email, numtel:numtel, _id: id };
await Organisateur.findByIdAndUpdate(id, org1);
res.json(org1);
}
export const deleteOrganisateur = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas d'Organisateur' avec l'ID: ${id}`);
await Organisateur.findByIdAndDelete(id);
res.json({ message: "Organisateur supprimé avec succès." });
}