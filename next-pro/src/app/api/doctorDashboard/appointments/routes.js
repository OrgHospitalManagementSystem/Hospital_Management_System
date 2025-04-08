// pages/api/appointments/index.js
import Appointment from '../../../../models/Appointment';
import Patient from '../../../../models/Patient';
import connectToDB from '../../../../lib/db';
import { NextResponse } from 'next/server';

// connectToDB();

export async function GET(req) {
  try {
    await connectToDB(); 
    const appointments = await Appointment.find().populate('patient');
    return NextResponse.json(appointments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching appointments' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDB(); 
    const { patientId, time, status, reason } = await req.json(); // Parse JSON body from request

    const patient = await Patient.findById(patientId);
    if (!patient) {
      return NextResponse.json({ message: 'Patient not found' }, { status: 404 });
    }

    const newAppointment = new Appointment({
      patient: patientId,
      time,
      status,
      reason,
    });

    await newAppointment.save();
    return NextResponse.json(newAppointment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating appointment' }, { status: 500 });
  }
}
