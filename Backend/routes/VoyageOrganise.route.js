import express from 'express';
const router = express.Router();
import { getVoyageOrganises, getVoyageOrganiseByID, createVoyageOrganise, updateVoyageOrganise, deleteVoyageOrganise } from'../controllers/VoyageOrganise.controller.js';
import {auth} from "../middleware/auth.js";

/**
 * @route GET /api/VoyageOrganises
 * @desc Get All VoyageOrganises
 * @access Public
 */
 router.get('/', auth, getVoyageOrganises);


/**
 * @route GET /api/VoyageOrganises
 * @desc Get All VoyageOrganises
 * @access Public
 */
router.get('/', getVoyageOrganises);
/**
 * @route POST /api/VoyageOrganises
 * @desc Ajouter un VoyageOrganise
 * @access Public
 */
router.post('/', createVoyageOrganise);
/**
 * @route GET /api/VoyageOrganises/:id
 * @desc Renvoyer un VoyageOrganise
 * @access Public
 */
router.get('/:id', getVoyageOrganiseByID);
/**
 * @route PUT /api/VoyageOrganises/:id
 * @desc Modifier un VoyageOrganise
 * @access Public
 */
router.put('/:id', updateVoyageOrganise);
/**
 * @route DELETE /api/VoyageOrganises/:id
 * @desc Supprimer un VoyageOrganise
 * @access Public
 */
router.delete('/:id', deleteVoyageOrganise);
export default router;