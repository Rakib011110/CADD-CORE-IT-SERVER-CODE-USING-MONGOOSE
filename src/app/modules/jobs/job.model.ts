import { Schema } from "mongoose";
import { TJob } from "./job.interface";

const JobSchema = new Schema<TJob>(
    {
      title: { type: String, required: true },
      slug: { type: String, required: true, unique: true },
      type: {
        type: String,
        enum: ["Internship", "Full time", "Part time"],
        required: true,
      },
      duration: { type: String },
      salary: { type: String },
      date: { type: String, required: true },
      category: { type: String, required: true },
      location: { type: String },
      experience: { type: String },
      about: { type: String },
      qualifications: [{ type: String }],
      responsibilities: [{ type: String }],
      benefits: [{ type: String }],
    },
    {
      timestamps: true, 
    }
  );
  