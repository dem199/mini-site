import React from "react"
import {Link} from "react-router-dom"

import productsData from "./productsData"

function Products() {    
    const products = productsData.map(prod => (
        <div key={prod.id}>
            <h3>
                <Link to={`/products/${prod.id}`}>{prod.name}</Link>
            </h3>
            <p>Price: ${prod.price}</p>
            <hr />
        </div>
    ))
    
    return (
        <div>
            <h1>Products Page</h1>
            {products}
        </div>
    )
}

export default Products