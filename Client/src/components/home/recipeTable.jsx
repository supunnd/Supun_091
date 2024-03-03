import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const RecipeTable = ({ recipe }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Title</th>
          <th className='border border-slate-600 rounded-md'>ingredients</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Instructions
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Time to Cook
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {recipe.map((recipe, index) => (
          <tr key={recipe._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {recipe.title}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {recipe.ingredients}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {recipe.instructions}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {recipe.timeToCook}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/recipe/details/${recipe._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/recipe/edit/${recipe._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/recipe/delete/${recipe._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecipeTable;
