import Navbar from './pages/shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/publicRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
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
