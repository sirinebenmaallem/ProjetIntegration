import mongoose from 'mongoose';
import Reservation from '../models/Reservation.model.js';
import LigneReservation from '../models/LigneReservation.model.js';
export const getReservations = async (req, res) => {
 try {
 const comm = await Reservation.find().populate('refclient');

 res.status(200).json(comm);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const getReservationByID = async (req, res) => {
 try {
 const comm = await Reservation.findById(req.params.id);

 res.status(200).json(comm);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const createReservation = async (req, res) => {
 const { total,refclient } = req.body;

 const newReservation = new Reservation({ total:total,refclient:refclient })
 try {
 await newReservation.save();
 res.status(201).json(newReservation );
 } catch (error) {
 res.status(409).json({ message: error.message });
 }
}
export const updateReservation= async (req, res) => {
 const { _id } = req.params;
 const { total,refclient } = req.body;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Reservation avec un id: ${id}`);
 const comm1 = { total:total,refclient:refclient, _id: _id };
 await Reservation.findByIdAndUpdate(_id, comm1);
 res.json(comm1);
}
export const deleteReservation = async (req, res) => {
 const { id } = req.params;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Reservation avec l'ID: ${id}`);
 await Reservation.findByIdAndDelete(id);
 res.json({ message: "Reservation supprimée avec succès." });
}