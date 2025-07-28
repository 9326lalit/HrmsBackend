// models/ActivityLog.js
import mongoose from 'mongoose'

const activityLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' },
  action: {
    type: String,
    enum: ['added', 'updated', 'deleted', 'status_changed'],
    required: true
  },
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('ActivityLog', activityLogSchema)
