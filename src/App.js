import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Favourite from './Components/Favourite';
import RecipeInstruction from './Components/RecipeInstruction';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/recipe/:id" element={<RecipeInstruction />} />
      </Routes>
    </>
  );
}

export default App;
