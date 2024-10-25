import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
    },
    born: {
        type: Date,
        required: true
    },
    die: {
        type: Date,
        required: true
    },
    totalBooks: {
        type: Number,
    }
}, { timestamps: true })

export default mongoose.model("Author", authorSchema)