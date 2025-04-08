// pages/api/doctors.js
import { NextResponse } from "next/server";

import Doctor from '../../../models/Doctor';
import { connectToDB } from '@/lib/db';

export async function GET() {
    // Establish MongoDB connection
    try {
      await connectToDB(); // Ensure the connection to the database

      // Fetch all doctor records from the Doctor collection
      const doctors = await Doctor.find();

      // Return the doctor data as JSON
    return NextResponse.json({ success: true, data: doctors }, { status: 200 });
    } catch (error) {
      // Catch any errors and send an error response
      console.error(error);
      res.status(500).json({ success: false, message: 'Error fetching doctors' });
    }
  
    // If the request method is not GET, return a method not allowed response
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

