import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [error,  setError] = useState(false);
    const [products, setProducts] = useState();

    useEffect(() => {
        const getProductDetail = () => fetch('../listproduct.json')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
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
    },[id]);


    if (loading) {
        return(<div>Loading...</div>)
    } else {
        if (error) {
            return <div>Error!!</div>
        } else {
            return <ItemDetail product={ products.find( p => p.id == id )} />
        }
    }
    
}

export default ItemDetailContainer