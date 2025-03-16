import { model, Schema } from "mongoose";


const courseSchema= new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    instructor: { type: String, required: true },
    duration: { type: Number, required: true }, 
    category: { type: String, required: true },
    photoUrl: { type: String },   
},{
    timestamps: true,
  })



export const Course= model('Course', courseSchema)