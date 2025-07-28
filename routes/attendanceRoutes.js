import express from 'express';
import {
  getAll,
  create,
  update,
  remove,
} from '../controllers/attendanceController.js';

const router = express.Router();

router.get('/getall', getAll);
router.post('/create', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
