import mongoose from "mongoose";

// db schema
const songSchema = new mongoose.Schema({
        title:  { type: String, required: required, trim: true },
        artist: { type: String, required: required, trim: true },
        year:   { type: Numer, min: 1900, max: 2100 }
      }, { timestamps: true });


export const Song = mongoose.model("Song", songSchema);
