import mongoose from 'mongoose';
import Hotel from '../models/Hotel.model.js';
export const getHotels = async (req, res) => {
try {
const cat = await Hotel.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getHotelByID = async (req, res) => {
try {
const moy = await Hotel.findById(req.params.id);
res.status(200).json(moy);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createHotel = async (req, res) => {
const { nomhotel,siteweb,localisation,disponibilité,capacité } = req.body;
const newHotel = new Hotel({ nomhotel:nomhotel,siteweb:siteweb,localisation:localisation,disponibilité:disponibilité,capacité:capacité })
try {
await newHotel.save();
res.status(201).json(newHotel );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateHotel= async (req, res) => {
const { id } = req.params;
const { nomhotel,siteweb,localisation,disponibilité,capacité } = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas d Hotel avec un id: ${id}`);
const moy1 = { nomhotel:nomhotel,siteweb:siteweb,localisation:localisation,disponibilité:disponibilité,capacité:capacité, _id: id };
await Hotel.findByIdAndUpdate(id, moy1);
res.json(moy1);
}
export const deleteHotel = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas d Hotel avec l'ID: ${id}`);
await Hotel.findByIdAndDelete(id);
res.json({ message: "Hotel supprimée avec succès." });
}
