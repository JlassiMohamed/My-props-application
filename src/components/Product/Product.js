import './Product.css'
import React from 'react'
import PropTypes from 'prop-types';

const Product = ({product,handleItem}) => {
    return (
        <div className="Product">
            <img src={product.image} width="200px" alt="moto"/>
            <h3 className="TitleProduct">{product.name}</h3>
            <h6>{product.price}</h6>
            <button onClick={()=>handleItem(product.name,product.price)} className="Btn">+ details</button>
        </div>
    )
}
Product.defaultProps={
    product:{
        image:"https://th.bing.com/th/id/OIP.CwBqnje8Or9oYp2FOYj5YAHaE2?pid=Api&rs=1",
        name:"unknown",
        price:"€0000"
    }
}

export default Product

Product.propTypes = {
    product : PropTypes.object,
}