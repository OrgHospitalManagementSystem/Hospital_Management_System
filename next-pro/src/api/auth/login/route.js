import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const { email, password } = body;

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
  }

  const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, 
    path: '/',
  });
  return response;
}
