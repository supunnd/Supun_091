import express from "express";
import { Recipe } from '../models/recipeModel.js';

const router = express.Router();

//route for save a new recipe
router.post ('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.ingredients ||
            !request.body.instructions ||
            !request.body.timetoCook
        ){
            return response.status(400).send({
                message: 'Send all required fields Title, Ingredients, Instructions, Timetocook',
            });
        }
        const newRecipe = {
            title: request.body.title,
            ingredients: request.body.ingredients,
            instructions: request.body.instructions,
            timetoCook: request.body.timetoCook,
        };

        const recipe = await Recipe.create(newRecipe);

        return response.status(201).send(recipe);
    }
    catch (error) {
        console.log(error.message);

        response.status(500).send ({message: error.message});
    }
});

//route to get all recipe from database
router.get ('/', async (request, response) => {
    try {
        const { id } = request.params;
        
        const recipe = await Recipe.find({});
        return response.status(200).json({
            count: recipe.length,
            data: recipe,
        });
    }
    catch (error) {
        console.log(error.message);

        response.status(500).send ({message: error.message});
    }
});

//route to get one Recipe by id
router.get ('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const recipe = await Recipe.findById(id);
        return response.status(200).json(recipe);
    }
    catch (error) {
        console.log(error.message);

        response.status(500).send ({message: error.message});
    }

});

//route for update a recipe
router.put ('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.ingredients ||
            !request.body.instructions ||
            !request.body.timetoCook
        )
        {
            return response.status(400).send({
                message: 'Send all required fields Ingredients, Instructions, Timetocook',
            });
        }
        const {id} = request.params;

        const result = await Recipe.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json ({message: 'Recipe not found'});
        }

        return response.status(200).send({message:'Recipe updated successfully'});
    }
    catch (error) {
        console.log(error.message);

        response.status(500).send ({message: error.message});
    }
});

//route to delete Recipe by id
router.delete ('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Recipe.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json ({message:'Recipe not found'});
        }

        return response.status(200).send ({message: 'Recipe deleted successfully'});
    }
    catch (error) {
        console.log(error.message);

        response.status(500).send ({message: error.message});
    }

});

export default router;

