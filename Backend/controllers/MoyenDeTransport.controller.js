import mongoose from 'mongoose';
import MoyenDeTransport from '../models/MoyenDeTransport.model.js';
export const getMoyenDeTransports = async (req, res) => {
try {
const cat = await MoyenDeTransport.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getMoyenDeTransportByID = async (req, res) => {
try {
const moy = await MoyenDeTransport.findById(req.params.id);
res.status(200).json(moy);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createMoyenDeTransport = async (req, res) => {
const { nomsmoyenT } = req.body;
const newMoyenDeTransport = new MoyenDeTransport({ nomsmoyenT:nomsmoyenT })
try {
await newMoyenDeTransport.save();
res.status(201).json(newMoyenDeTransport );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateMoyenDeTransport= async (req, res) => {
const { id } = req.params;
const { nomsmoyenT } = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de moyen de transport avec un id: ${id}`);
const moy1 = { nomsmoyenT:nomsmoyenT, _id: id };
await MoyenDeTransport.findByIdAndUpdate(id, moy1);
res.json(moy1);
}
export const deleteMoyenDeTransport = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de moyen de transport avec l'ID: ${id}`);
await MoyenDeTransport.findByIdAndDelete(id);
res.json({ message: "Moyen de transport supprimée avec succès." });
}