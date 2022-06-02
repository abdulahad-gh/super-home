import Navbar from './pages/shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/publicRoutes';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css'; // aos css 
import 'react-toastify/dist/ReactToastify.css'; //react toastify css

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
      <ToastContainer />
    </Navbar>

  );
}

export default App;
