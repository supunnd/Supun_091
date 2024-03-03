
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CreateRecipe from './pages/createRecipe';
import ShowRecipe from './pages/showRecipe';
import EditRecipe from './pages/editRecipe';
import DeleteRecipe from './pages/deleteRecipe';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipe/create' element={<CreateRecipe />} />
      <Route path='/recipe/details/:id' element={<ShowRecipe />} />
      <Route path='/recipe/edit/:id' element={<EditRecipe />} />
      <Route path='/recipe/delete/:id' element={<DeleteRecipe />} />
    </Routes>
  );
};

export default App;
