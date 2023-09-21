import logo from './logo.svg';
import './App.css';
import NavbarCom from './Compenents/NavbarCom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Product from './Product';
import Contact from './Contact';
import Footer from './Compenents/Footer';
import ShopData from './Shop'



function App() {

  return (
    <Router>
      <div className="">
        <NavbarCom />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Product/:id' element={<Product ShopData={ShopData} />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
