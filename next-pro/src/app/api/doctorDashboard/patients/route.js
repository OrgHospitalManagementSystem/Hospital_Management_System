// pages/api/patients/index.js
import { connectToDB } from "../../../../lib/db";
import Patient from "../../../../models/Patient";
import { NextResponse } from 'next/server';  // استيراد NextResponse

// GET request handler
export async function GET(req) {
  try {
    await connectToDB();  // تأكد من الاتصال بالـ DB
    const patients = await Patient.find({});
    return NextResponse.json({ patients });  // استخدام NextResponse بدلاً من res
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching patients" }, { status: 500 });
  }
}

// POST request handler
export async function POST(req) {
  try {
    await connectToDB(); 
    const { name, age, gender, contact, diagnosis, lastVisit, status } = await req.json();
    const newPatient = new Patient({
      name,
      age,
      gender,
      contact,
      diagnosis,
      lastVisit,
      status,
    });

    await newPatient.save();
    return NextResponse.json({ message: "Patient added successfully", patient: newPatient }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error adding patient" }, { status: 500 });
  }
}