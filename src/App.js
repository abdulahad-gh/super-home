import Navbar from './pages/shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/publicRoutes';

function App() {
  return (
    <Navbar>
      <Routes>
        {
          publicRoutes.map(({ path, Component }, i) => (
            <Route key={i} path={path} element={<Component />} />
          ))
        }


      </Routes>
    </Navbar>

  );
}

export default App;
