
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Route,Routes} from "react-router-dom";
import { hasPointerEvents } from '@testing-library/user-event/dist/utils';
import Products from './component/Products';
import Product from './component/Product';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/products/:id" element={<Product/>}/>
     
     </Routes>
    </>
  );
}

export default App;
