import { Routes, Route } from 'react-router-dom';
import AddAffirmation from './pages/AddAffirmation';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/add" element={<AddAffirmation />}></Route>
    </Routes>
  );
}

export default App;
