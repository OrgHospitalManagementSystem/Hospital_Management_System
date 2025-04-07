import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["Dental Health", "Teeth Whitening", "Nutrition", "Orthodontics"],
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    summary: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    readTime: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+\..+/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
    fullContent: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

articleSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Article ||
  mongoose.model("Article", articleSchema);
