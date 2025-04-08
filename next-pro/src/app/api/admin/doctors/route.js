// src/app/api/admin/doctors/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import DoctorProfile from '@/models/DoctorProfile';

export async function GET(request) {
  try {
    await connectDB();
    
    // Get doctors with their profiles
    const doctors = await User.find({ role: 'doctor' })
      .populate('doctorProfile');
    
    return NextResponse.json(doctors);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    
    // Create user with doctor role
    const user = new User({
      name: data.name,
      email: data.email,
      password: data.password, // should be hashed in a real app
      role: 'doctor',
      image: data.image || '',
      profilePicture: data.profilePicture || '',
      address: data.address || '',
      birthDate: data.birthDate || null,
      IsConfirmed: true, // admin-created accounts are auto-confirmed
      registrationDate: new Date()
    });
    
    await user.save();
    
    // Create doctor profile
    const doctorProfile = new DoctorProfile({
      user: user._id,
      specialization: data.specialization,
      experienceYears: data.experienceYears,
      availability: data.availability || []
    });
    
    await doctorProfile.save();
    
    // Link profile to user
    user.doctorProfile = doctorProfile._id;
    await user.save();
    
    return NextResponse.json({ user, doctorProfile });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}