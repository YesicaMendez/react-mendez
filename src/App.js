import { useState } from 'react';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  const [countCarrito, setCountCarrito] = useState(0);
  const [stock, setStock] = useState(10);

  const onAdd = (cantidad) => {
    setCountCarrito(countCarrito + cantidad);
    alert(`Se suma ${cantidad} productos al carrito.`);
    setStock(stock - cantidad);
  }

  return (
    <>
      <div className=''>
        {console.log(`El stock actual es ${stock}`)}
        <NavBar contador={countCarrito} />
        <br></br>
        <ItemListContainer greeting={'Este es el Contenedor para mi proyecto.'}></ItemListContainer>
        <br></br>
        {/* <ItemCount inicial={1} stock={stock} onAdd={onAdd}></ItemCount> */}
        <p>Mendez, Yesica Melisa</p>
      </div>
    </>
  );
}

export default App;
