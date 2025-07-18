import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Dashboard from '../pages/dashboard';

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation