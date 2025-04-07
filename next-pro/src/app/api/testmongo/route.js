// app/api/testmongo/route.js
import { connectToDB } from '@/lib/db';

export async function GET() {
  try {
    await connectToDB();
    return Response.json({ message: '✅ MongoDB Connected Successfully!' });
  } catch (error) {
    return Response.json({ message: '❌ Connection Failed', error: error.message }, { status: 500 });
  }
}
