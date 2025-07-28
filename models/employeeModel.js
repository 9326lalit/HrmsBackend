import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  joiningDate: { type: String, required: true },
  image: { type: String, default: 'https://randomuser.me/api/portraits/lego/1.jpg' }
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
