// src/app/api/admin/contact-messages/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import ContactMessage from '@/models/ContactMessage';

export async function GET(request) {
  try {
    await connectDB();
    
    // Get all contact messages
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    const data = await request.json();
    
    // Mark message as replied
    const message = await ContactMessage.findById(data.id);
    if (!message) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }
    
    message.replied = true;
    await message.save();
    
    return NextResponse.json(message);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}