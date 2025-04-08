import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  category: { type: String },
  tags: [String],
  featuredImage: { type: String },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  slug: { type: String, unique: true },
  viewCount: { type: Number, default: 0 },
}, { timestamps: true });

// Generate slug before saving
articleSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
  }
  next();
});

export default mongoose.models.Article || mongoose.model('Article', articleSchema);