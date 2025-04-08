// src/app/api/admin/articles/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Article from '@/models/Article';

export async function GET(request) {
  try {
    await connectDB();
    
    // Get all articles with author info
    const articles = await Article.find()
      .populate('author', 'name profilePicture');
    
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    
    // Create new article
    const article = new Article({
      title: data.title,
      content: data.content,
      author: data.author,
      category: data.category,
      tags: data.tags || [],
      featuredImage: data.featuredImage,
      status: data.status || 'draft'
    });
    
    await article.save();
    
    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}