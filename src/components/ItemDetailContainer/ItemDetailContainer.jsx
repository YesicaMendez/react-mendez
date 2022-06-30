import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { data } from 'jquery';


function ItemDetailContainer() {
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [product, setProduct] = useState();

    useEffect(() => {

        const db = getFirestore();

        const itemRef = doc(db, 'items', id);

        getDoc(itemRef)
            .then((snapshot) => {
                setProduct({ ...snapshot.data(), id: id });
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error:' + error);
                setError(true);
            })
            .finally(() => {
                setLoading(false)
            });
    }, [id]);


    if (loading) {
        return (<div>Loading...</div>)
    } else {
        if (error) {
            return <div>Error!!</div>
        } else {
            return <ItemDetail product={product} />
        }
    }

}

export default ItemDetailContainer