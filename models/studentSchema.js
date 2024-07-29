import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    body: String,
    date: Date,
});

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    comments: [commentSchema],
    rating: {
        type: Number,
        default: 0,
    },
});

const StudentModel = mongoose.model('Student', studentSchema);

export default StudentModel;
