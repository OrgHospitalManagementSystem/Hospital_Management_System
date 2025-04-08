// src/app/api/admin/appointments/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Appointment from '@/models/Appointment';

export async function GET(request) {
  try {
    await connectDB();
    
    // Get all appointments with patient and doctor info
    const appointments = await Appointment.find()
      .populate('patient', 'name email profilePicture')
      .populate('doctor', 'name email profilePicture');
    
    return NextResponse.json(appointments);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    
    // Create new appointment
    const appointment = new Appointment({
      patient: data.patient,
      doctor: data.doctor,
      date: data.date,
      time: data.time,
      status: data.status || 'pending',
      reason: data.reason
    });
    
    await appointment.save();
    
    return NextResponse.json(appointment);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}