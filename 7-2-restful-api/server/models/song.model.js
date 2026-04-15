import mongoose from "mongoose";

// db schema
const songSchema = new mongoose.Schema({
        title:  { type: String, required: required, trim: true },
        artist: { type: String, required: required, trim: true },
        year:   { type: Numer, min: 1900, max: new Date() }
      }, { timestamps: true });


export const Song = mongoose.model("Song", songSchema);
