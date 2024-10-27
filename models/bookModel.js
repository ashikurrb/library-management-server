import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    uniqueId: {
        type: String,
        require: true,
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
    buyingPrice: {
        type: Number,
        require: true,
    },
    buyingDate: {
        type: Date,
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
    goodReadsUrl: {
        type: String,
    },
    bookCoverPhoto: {
        type: String,
        require: true,
    },
    bookStatus: {
        type: String,
        default: "In Stock",
        enum: ["In Stock", "Borrowed", "Lost", "Sold", "Gifted"],
        require: true,
    },
}, { timestamps: true })

export default mongoose.model("Book", bookSchema)