import { model, Schema } from "mongoose";

const courseSchema = new Schema(
  {
    title: { type: String , require: true},
    slug: { type: String, require: true },
    categories: { type: String , require: true},
    duration: { type: String, require: true },
    lessons: { type: String , require: true},
    photoUrl: { type: String , require: true},
    projects: { type: String, require: true },
    description: { type: String , require: true},
    schedule: {
      startingDate: { type: String },
      mode: { type: String },
      days: { type: String },
      time: { type: String },
    },
    overview: {
      overviewDescription: { type: String },
      videoUrl: { type: String },
    },
    courseIncludes: {
      duration: { type: String },
      weeklyLiveClasses: { type: String },
      weeklyClassHours: { type: String },
    },
    topicsCovered: [
      {
        topicTitle: { type: String },
        topicDescription: { type: String },
      },
    ],
    softwaresTaught: [
      {
        softwareTitle: { type: String },
        photoUrl: { type: String },
      },
    ],
    expertPanel: {
      advisors: [
        {
          name: { type: String },
          title: { type: String },
          photoUrl: { type: String },
        },
      ],
      teachers: [
        {
          name: { type: String },
          role: { type: String },
          photoUrl: { type: String },
        },
      ],
    },
    learningProject: [
      {
        title: { type: String },
        description: { type: String },
        photoUrl: { type: String },
      },
    ],
    freeTrainingSessions: [
      {
        title: { type: String },
        videoUrl: { type: String },
      },
    ],
    courseFee: { type: String },
    faqs: [
      {
        question: { type: String },
        answer: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Course = model("Course", courseSchema);