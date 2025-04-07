// src/models/Patient.js
import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  diagnosis: String,
});

export default mongoose.models.Patient || mongoose.model("Patient", patientSchema);
