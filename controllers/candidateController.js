import Candidate from '../models/Candidate.js'

export const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find()
    res.json(candidates)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch candidates' })
  }
}

export const addCandidate = async (req, res) => {
  try {
    const candidate = new Candidate(req.body)
    await candidate.save()
    res.status(201).json(candidate)
  } catch (error) {
    res.status(400).json({ error: 'Failed to add candidate' })
  }
}

export const deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params
    await Candidate.findByIdAndDelete(id)
    res.json({ message: 'Candidate deleted successfully' })
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete candidate' })
  }
}

export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.body
    const updated = await Candidate.findByIdAndUpdate(id, { status }, { new: true })
    res.json(updated)
  } catch (error) {
    res.status(400).json({ error: 'Failed to update status' })
  }
}
