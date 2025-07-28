import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  task: { type: String, required: true },
  status: {
    type: String,
    enum: ['Present', 'Absent', 'Remote'],
    default: 'Present',
  },
  image: { type: String, default: 'https://randomuser.me/api/portraits/lego/1.jpg' },
}, { timestamps: true });

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;
