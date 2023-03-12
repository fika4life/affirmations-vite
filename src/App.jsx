import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import SharedLayout from './pages/SharedLayout';
import AddAffirmation from './pages/AddAffirmation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="add" element={<AddAffirmation />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
