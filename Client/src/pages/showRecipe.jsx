import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowRecipe = () => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/recipe/${id}`)
      .then((response) => {
        setRecipe(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Recipe</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{recipe._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{recipe.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Ingredient</span>
            <span>{recipe.ingredients}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Instruction</span>
            <span>{recipe.instrutions}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Time to Cook</span>
            <span>{recipe.timeToCook}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(recipe.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(recipe.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowRecipe;
