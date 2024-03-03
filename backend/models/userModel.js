import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        createdAt: {
            type: date,
            default: new Date(),
        },
    },
    {
        timestamps : true,
    }
);

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password,12)
});

export const User = mongoose.model('User',userSchema);