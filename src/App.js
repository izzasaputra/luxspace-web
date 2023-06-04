import 'assets/css/index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import HomePage from 'pages/HomePage';
import Details from 'pages/Details';
import Cart from 'pages/Cart'
import Congratulation from 'pages/Congratulation';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/:idc" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/congratulation" element={<Congratulation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
