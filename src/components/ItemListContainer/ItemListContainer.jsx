import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: '1', title: 'Cerveza', price: 200, pictureUrl: 'https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/fotos/b/0000000000/3008_1.jpg' },
          { id: '2', title: 'Vodka', price: 400, pictureUrl: 'https://www.distribuidorabebidas.com.uy/wp-content/uploads/sites/31/2018/01/botella_vodka_smirnoff_750ml.jpg' },
          { id: '3', title: 'Cerveza Corona', price: 250, pictureUrl: 'https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/fotos/b/0000000060/92_1.jpg' },
          { id: '4', title: 'Vino', price: 180, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_830193-MLA46221819968_052021-O.webp' },
          { id: '5', title: 'Tekila', price: 300, pictureUrl: 'https://alkoshop.ee/2366/tekila-sierra-tequila-silver-38-1-l.jpg' },
          { id: '6', title: 'Fernet Branca', price: 700, pictureUrl: 'https://labebidadetusfiestas.com.ar/37266/fernet-branca-1lt.jpg' },
          { id: '7', title: 'Geseosa', price: 240, pictureUrl: 'https://panchitoverduleria.cl/wp-content/uploads/2020/08/panchito-verduleria-coca-cola-3-litros.jpg' },
        ]);
      }, 2000);
    });

    getProductos
      .then((result) => {
        setProductos(result)
      })
      .catch((error) => {
        console.log('No se pudo obtener los productos');
      })
  }, []);

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList productos={productos}></ItemList>
    </>
  )
}

export default ItemListContainer;
