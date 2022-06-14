import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer() {

    const [productDetail, setProductDetail] = useState();

    useEffect(() => {
        const getProductDetail = () => fetch('listproduct.json', { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                setProductDetail(data);
            })
            .catch((error) => {
                console.log('Error:' + error)
            });

        setTimeout(() => {
            getProductDetail();
        }, 2000);
    },[]);

    if (productDetail){
        return (
            <div className='row'>
                    <ItemDetail productDetail={productDetail.find(produc => produc.id == 3)}></ItemDetail>
            </div>
        )
    }
    
}

export default ItemDetailContainer