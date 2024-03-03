import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema(
    {   
        title: {
            type: String,
            required: true,
        },
        ingredients: {
            type: String,
            required: true,
        },
        instructions: {
            type: String,
            required: true,
        },
        timeToCook: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps : true,
    }
);

export const Recipe = mongoose.model('Recipe',recipeSchema);