import express from 'express';
import { createLeave, deleteLeave, getLeaves, updateLeave } from '../controllers/leaveController.js';

const router = express.Router();

// Define the routes
router.get('/getall', getLeaves);
router.post('/create', createLeave);
router.put('/:id', updateLeave);
router.delete('/:id', deleteLeave);

export default router;
