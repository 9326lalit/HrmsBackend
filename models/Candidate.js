import mongoose from 'mongoose'

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, default: 'Not Assigned' },
  status: { type: String, default: 'New' },
  experience: { type: String, default: '0' },
}, { timestamps: true })

const Candidate = mongoose.model('Candidate', candidateSchema)

export default Candidate
