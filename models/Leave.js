import mongoose from 'mongoose';

const LeaveSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },
  date: { type: String, required: true },
  reason: { type: String },
  status: { type: String, default: 'Pending' },
  image: { type: String }
}, { timestamps: true });

export default mongoose.model('Leave', LeaveSchema);
