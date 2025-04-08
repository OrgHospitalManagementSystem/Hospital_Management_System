// import mongoose from 'mongoose';

// const appointmentSchema = new mongoose.Schema({
//   patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   date: Date,
//   time: String,
//   status: { type: String, enum: ['pending', 'approved', 'cancelled', 'completed'], default: 'pending' },
//   reason: String,
// }, { timestamps: true });

// export default mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);
import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Scheduled', 'Confirmed', 'Cancelled'],
  },
  reason: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
