import React from 'react'

import Item from '../Item/Item'

function ItemList( {productos} ) {

    return (
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 px-4 px-md-5 justify-content-evenly itemListCustomize'>
            {productos?.map(prod => <Item key={prod.id} producto={prod} />)}
        </div>
    )
}

export default ItemList 