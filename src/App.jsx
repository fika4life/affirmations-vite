import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AddAffirmation from './pages/AddAffirmation';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/add" element={<AddAffirmation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
