// src/app/api/admin/patients/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import PatientProfile from '@/models/PatientProfile';

export async function GET(request) {
  try {
    await connectDB();
    
    // Get patients with their profiles
    const patients = await User.find({ role: 'user' })
      .populate('patientProfile');
    
    return NextResponse.json(patients);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    
    // Create user with patient role
    const user = new User({
      name: data.name,
      email: data.email,
      password: data.password, // should be hashed in a real app
      role: 'user',
      image: data.image || '',
      profilePicture: data.profilePicture || '',
      address: data.address || '',
      birthDate: data.birthDate || null,
      IsConfirmed: true, // admin-created accounts are auto-confirmed
      registrationDate: new Date()
    });
    
    await user.save();
    
    // Create patient profile
    const patientProfile = new PatientProfile({
      user: user._id,
      gender: data.gender,
      dateOfBirth: data.dateOfBirth,
      phone: data.phone,
      address: data.address,
      medicalHistory: data.medicalHistory || '',
      allergies: data.allergies || []
    });
    
    await patientProfile.save();
    
    // Link profile to user
    user.patientProfile = patientProfile._id;
    await user.save();
    
    return NextResponse.json({ user, patientProfile });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}