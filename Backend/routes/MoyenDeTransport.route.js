import express from 'express';
const router = express.Router();
import { getMoyenDeTransports, getMoyenDeTransportByID, createMoyenDeTransport,updateMoyenDeTransport, deleteMoyenDeTransport } from '../controllers/MoyenDeTransport.controller.js';
/**
* @route GET /api/MoyenDeTransports
* @desc Get All MoyenDeTransports
* @access Public
*/
router.get('/', getMoyenDeTransports);
/**
* @route POST /api/MoyenDeTransports
* @desc Ajouter une MoyenDeTransport
* @access Public
*/
router.post('/', createMoyenDeTransport);
/**
* @route GET /api/MoyenDeTransports/:id
* @desc Renvoyer une MoyenDeTransport
* @access Public
*/
router.get('/:id', getMoyenDeTransportByID);
/**
* @route PUT /api/MoyenDeTransports/:id
* @desc Modifier une MoyenDeTransport
* @access Public
*/
router.put('/:id', updateMoyenDeTransport);
/**
* @route DELETE /api/MoyenDeTransports/:id
* @desc Supprimer une MoyenDeTransport
* @access Public
*/
router.delete('/:id', deleteMoyenDeTransport);
export default router;