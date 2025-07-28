import express from 'express';
import {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee
} from '../controllers/employeeController.js';

const router = express.Router();

router.get('/getall', getAllEmployees);
router.post('/create', addEmployee);
router.put('/:email', updateEmployee);
router.delete('/:email', deleteEmployee);

export default router;
