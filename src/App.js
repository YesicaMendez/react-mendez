import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  const [countCarrito, setCountCarrito] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar contador={countCarrito} />
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryname' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='*' element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
