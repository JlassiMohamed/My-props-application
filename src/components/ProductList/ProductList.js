import './ProductList.css'
import React from 'react'
import Product from '../Product/Product'

const ProductList = () => {
    const Products = [
    {image:"https://th.bing.com/th/id/OIP.rBZlciQMsIBEbEbJQ0-fFAHaFS?pid=Api&rs=1",
    name:"Piaggo Primavera",
    price:"€5000"},
    {image:"https://www.accessoire-vespa.fr/images/piaggio-lx-50-prix-neuf_3.jpg",
    name:"Piaggo Lx",
    price:"€4000"},
    {image:"https://th.bing.com/th/id/OIP.YXlbj91NmNp898-n_JBMjwHaFG?w=266&h=183&c=7&o=5&pid=1.7",
    name:"Piaggo Liberty",
    price:"€4500"},
    {image:"https://th.bing.com/th/id/OIP.Z4wjk9FyfabNUoLl7Ne0ugHaFb?w=259&h=191&c=7&o=5&pid=1.7",
    name:"Piaggo Scarabeo",
    price:"€3500"}
    ]
    const handleItem = (name,price) => {
        alert(`this is a ${name} moto and the price is ${price}`)
    };
    return (
        <div>
            <h4 className="TitleProducts">The list of the newest motorcycles </h4>
            <div className="Products">
                {Products.map((product,i)=>(
                <Product product={product} handleItem={handleItem} key={i}/>
                ))}
            </div>
            <hr/>
            <h4 className="TitleProducts">The newest Vespa motorcycles</h4>
            <div className="Products">
                {Products.filter(product=>(+product.price.replace('€','')>4000)).map((product,i)=>(
                <Product product={product} handleItem={handleItem} key={i}/>))}
            </div>
        </div>
    )
}

export default ProductList
