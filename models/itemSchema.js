import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    body: String,
    date: Date,
});

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    comments: [commentSchema],
});

const ItemModel = mongoose.model('Item', itemSchema);

export default ItemModel;
