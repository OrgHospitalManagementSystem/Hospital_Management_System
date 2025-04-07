// src/app/api/testmongo/route.js
import { connectToDB } from '../../../lib/db';
import Patient from '../../../models/Patient';

export async function GET() {
  try {
    await connectToDB();

    // إضافة سجل تجريبي
    const newPatient = await Patient.create({
      name: 'Ahmad',
      age: 28,
      diagnosis: 'Tooth Decay',
    });

    return Response.json({ message: '✅ Patient Created', patient: newPatient });
  } catch (error) {
    return Response.json({ message: '❌ Failed', error: error.message }, { status: 500 });
  }
}
