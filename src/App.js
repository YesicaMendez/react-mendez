import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar contador={ '1' }/>
      <br></br>
      <ItemListContainer greeting={'Este es el Contenedor para mi proyecto.'}></ItemListContainer>
      <br></br>
      <p>Mendez, Yesica Melisa</p>
    </>
  );
}

export default App;
