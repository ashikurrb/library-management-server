import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
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
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        require: true,
    },
    publication: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publication',
        require: true,
    },
    originalPrice: {
        type: Number,
        require: true,
    },
    boughtPrice: {
        type: Number,
        require: true,
    },
    publishDate: {
        type: Date,
        require: true,
    },
    edition: {
        type: String,
        require: true,
    },
    ISBN: {
        type: Number,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
    version: {
        type: String,
        default: "Original",
        enum: ["Original", "Translated", "Magazine"],
    },
    translationAuthor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        require: true,
    },
    type: {
        type: String,
        default: "Paperback",
        enum: ["Hardcover", "Paperback", "Magazine", "Papercut"]
    },
    genre: {
        type: String,
        require: true,
    },
    goodreadsUrl: {
        type: String,
    },
    bookCoverPhoto: {
        type: String,
        require: true,
    },
}, { timestamps: true })

export default mongoose.model("Book", bookSchema)