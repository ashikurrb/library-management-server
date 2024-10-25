import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
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
    established : {
        type: Date,
        required: true
    },
    country: {
        type: String,
    },
    founder: {
        type: String,
    }
}, { timestamps: true })

export default mongoose.model("Publication", publicationSchema)