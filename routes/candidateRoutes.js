import express from 'express'
import {
  getAllCandidates,
  addCandidate,
  deleteCandidate,
  updateStatus,
} from '../controllers/candidateController.js'

const router = express.Router()

router.get('/getall', getAllCandidates)
router.post('/create', addCandidate)
router.delete('/:id', deleteCandidate)
router.patch('/:id/status', updateStatus)

export default router
