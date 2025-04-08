// pages/api/appointments/[id].js
import Appointment from '../../../models/Appointment';
import dbConnect from '../../../utils/dbConnect';
import { NextResponse } from 'next/server';

dbConnect();

export async function PUT(req, { params }) {
    await connectToDB();  
  const { id } = params; // Accessing dynamic `id` from URL parameters

  try {
    const { time, status, reason } = await req.json(); // Parse JSON body from request
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, { time, status, reason }, { new: true });
    
    if (!updatedAppointment) {
      return NextResponse.json({ message: 'Appointment not found' }, { status: 404 });
    }

    return NextResponse.json(updatedAppointment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error updating appointment' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
    await connectToDB(); 
  const { id } = params; // Accessing dynamic `id` from URL parameters

  try {
    await Appointment.findByIdAndDelete(id);
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting appointment' }, { status: 500 });
  }
}
