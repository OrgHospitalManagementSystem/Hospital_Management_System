// // pages/api/patients/[id].js
// import { connectToDB } from "../../../../../lib/db";
// import Patient from "../../../../../models/Patient";
// import { NextResponse } from 'next/server';  // استيراد NextResponse

// // PUT request handler
// export async function PUT(req, context) {
//   await connectToDB();
//   const { id } = await context.params;
//   if (!id) {
//     return NextResponse.json({ message: "Patient ID is required" }, { status: 400 });
//   }
//   try {
//     const { name, age, gender, contact, diagnosis, lastVisit, status } = await req.json();

//     const updatedPatient = await Patient.findByIdAndUpdate(
//       id,
//       { name, age, gender, contact, diagnosis, lastVisit, status },
//       { new: true }
//     );

//     if (!updatedPatient) {
//       return NextResponse.json({ message: "Patient not found" }, { status: 404 });
//     }

//     return NextResponse.json({ message: "Patient updated successfully", patient: updatedPatient }, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ message: "Error updating patient" }, { status: 500 });
//   }
// }

// // DELETE request handler
// export async function DELETE(req, context) {
//   await connectToDB();
//   const { id } = await context.params;
//   if (!id) {
//     return NextResponse.json({ message: "Patient ID is required" }, { status: 400 });
//   }
//   try {
//     const deletedPatient = await Patient.findByIdAndDelete(id);

//     if (!deletedPatient) {
//       return NextResponse.json({ message: "Patient not found" }, { status: 404 });
//     }

//     return NextResponse.json({ message: "Patient deleted successfully" }, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ message: "Error deleting patient" }, { status: 500 });
//   }
// }

// // If method is not allowed
// export async function OPTIONS(req) {
//   return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
// }
// src/app/api/doctorDashboard/patients/[id]/route.js
import { connectToDB } from "../../../../../lib/db";
import Patient from "../../../../../models/Patient";
import { NextResponse } from 'next/server';

// DELETE request handler
export async function DELETE(req, context) {
  await connectToDB();
  
  // يجب انتظار params قبل الوصول إليها
  const { id } = await context.params;

  // تحقق من وجود id
  if (!id) {
    return NextResponse.json({ message: "Patient ID is required" }, { status: 400 });
  }

  try {
    const deletedPatient = await Patient.findByIdAndDelete(id);

    if (!deletedPatient) {
      return NextResponse.json({ message: "Patient not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Patient deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error deleting patient" }, { status: 500 });
  }
}

// PUT request handler
export async function PUT(req, context) {
  await connectToDB();
  
  // يجب انتظار params قبل الوصول إليها
  const { id } = await context.params;

  // تحقق من وجود id
  if (!id) {
    return NextResponse.json({ message: "Patient ID is required" }, { status: 400 });
  }

  try {
    const { name, age, gender, contact, diagnosis, lastVisit, status } = await req.json();

    const updatedPatient = await Patient.findByIdAndUpdate(
      id,
      { name, age, gender, contact, diagnosis, lastVisit, status },
      { new: true }
    );

    if (!updatedPatient) {
      return NextResponse.json({ message: "Patient not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Patient updated successfully", patient: updatedPatient }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error updating patient" }, { status: 500 });
  }
}

// If method is not allowed
export async function OPTIONS(req) {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
