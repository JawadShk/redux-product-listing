import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Error from './Error';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header fixed="top"/>
        <Routes>
          <Route path='/' element={<ProductListing/>}></Route>
          <Route path='/product/:productId' element={<ProductDetail/>}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
