import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  lastVisit: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Follow-up', 'New', 'Completed'],
    default: 'Active',
  },
}, { timestamps: true });

export default mongoose.models.Patient || mongoose.model('Patient', patientSchema);