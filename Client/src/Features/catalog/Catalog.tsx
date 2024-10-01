
import { Product } from "../../App/Models/Product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";



export default function Catalog(){
    const [products, setProducts]= useState<Product[]>([ ]);

  useEffect(() => {
    fetch("http://localhost:5009/api/Products") 
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error)); 
}, []);

    return (
        <>
       <ProductList products={products}/>
    
        </>
    )
}