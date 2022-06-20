import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const { categoryname } = useParams();
  let productFilter = [];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProductDetail = () => fetch('../listproduct.json')
      .then((response) => response.json())
      .then((data) => {
        if (categoryname) {
          productFilter = data.filter(item => item.category == categoryname);
        } else {
          productFilter = data;
        }
        setProducts(productFilter);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error:' + error);
        setError(true);
      })
      .finally(() => {
        setLoading(false)
      });

    setTimeout(() => {
      getProductDetail();
    }, 2000);
  },[categoryname]);

  if (loading) {
    return (<div>Loading...</div>)
  } else {
    if (error) {
      return <div>Error!!</div>
    } else {
      return (
        <>
          <div>
            <h1 className="text-center my-3">"Encontra todo para tu Mascota"</h1>
          </div>
          <ItemList productos={products}></ItemList>
        </>
      )
    }
  }
}

export default ItemListContainer;
