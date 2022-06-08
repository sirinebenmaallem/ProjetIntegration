import mongoose from 'mongoose';
import ligneReservation from '../models/LigneReservation.model.js';
export const getLigneReservations = async (req, res) => {
 try {
 const lc = await
 ligneReservation.find().populate('refarticle').populate('refreservation');

 res.status(200).json(lc);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const getLigneReservationByID = async (req, res) => {
 try {
 const lc = await ligneReservation.findById(req.params.id);

 res.status(200).json(lc);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const createLigneReservation = async (req, res) => {
 const { nbrreservation, totligne,refarticle,refreservation } = req.body;

 const newLigneReservation = new
 ligneReservation({ nbrreservation:nbrreservation,
totligne:totligne,refarticle:refarticle,refreservation:refreservation })
 try {
 await newLigneReservation.save();
 res.status(201).json(newLigneReservation );
 } catch (error) {
 res.status(409).json({ message: error.message });
 }
}
export const updateLigneReservation= async (req, res) => {
 const { id } = req.params;
 const { nbrreservation, totligne,refarticle,refreservation } = req.body;

 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de LC avec un id: ${id}`);
 const lc1 = { nbrreservatione:nbrreservation, totligne:totligne,
refarticle:refarticle,refreservation:refreservation,_id: id };
 await ligneReservation.findByIdAndUpdate(id, lc1);
 res.json(lc1);
}
export const deleteLigneReservation = async (req, res) => {
 const { id } = req.params;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de LC avec l'ID: ${id}`);
 await ligneReservation.findByIdAndDelete(id);
 res.json({ message: "LC supprimée avec succès." });
}
export const getLigneReservationByIdCom = async (req, res) => {
 try {
 const lc = await ligneReservation.find({ refreservation:
req.params.refreservation}).populate('refreservation').populate('refarticle').exec()
;

 res.status(200).json(lc);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
} 