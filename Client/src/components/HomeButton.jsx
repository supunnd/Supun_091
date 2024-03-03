import { Link } from 'react-router-dom';
import { BsArrowLeft, BsHouse } from 'react-icons/bs';

const HomeButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
      >
        <BsHouse className='text-2xl' />
      </Link>
    </div>
  );
};

export default HomeButton;
