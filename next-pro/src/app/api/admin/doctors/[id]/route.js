// src/app/api/admin/doctors/[id]/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import DoctorProfile from '@/models/DoctorProfile';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    
    const doctor = await User.findById(id)
      .populate('doctorProfile');
    
    if (!doctor) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });
    }
    
    return NextResponse.json(doctor);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const data = await request.json();
    
    // Update user data
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });
    }
    
    // Update basic user info
    user.name = data.name || user.name;
    user.email = data.email || user.email;
    if (data.password) user.password = data.password; // should be hashed
    user.address = data.address || user.address;
    user.birthDate = data.birthDate || user.birthDate;
    user.profilePicture = data.profilePicture || user.profilePicture;
    
    await user.save();
    
    // Update doctor profile
    const doctorProfile = await DoctorProfile.findOne({ user: id });
    if (doctorProfile) {
      doctorProfile.specialization = data.specialization || doctorProfile.specialization;
      doctorProfile.experienceYears = data.experienceYears || doctorProfile.experienceYears;
      if (data.availability) doctorProfile.availability = data.availability;
      
      await doctorProfile.save();
    }
    
    return NextResponse.json({ user, doctorProfile });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    
    // Find and delete user
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });
    }
    
    // Delete doctor profile
    await DoctorProfile.findOneAndDelete({ user: id });
    
    return NextResponse.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}