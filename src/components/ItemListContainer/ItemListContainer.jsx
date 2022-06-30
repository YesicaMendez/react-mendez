import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const { categoryname } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const db = getFirestore();

    const itemsCollection = collection(db, 'items');

    if (categoryname) {
      const q = query(itemsCollection, where('category', '==', categoryname));

      getDocs(q)
        .then((snapshot) => {
          setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          setLoading(false);
        })
        .catch((error) => {
          console.log('Error:' + error);
          setError(true);
        })
        .finally(() => {
          setLoading(false)
        });
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          setLoading(false);
        })
        .catch((error) => {
          console.log('Error:' + error);
          setError(true);
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [categoryname]);

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
