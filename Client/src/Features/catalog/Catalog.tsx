
import agent from "../../App/api/agent";
import LoadingComponenet from "../../App/Layout/LoadingComponenet";
import { Product } from "../../App/Models/Product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";



export default function Catalog(){
    const [products, setProducts]= useState<Product[]>([ ]);
    const[loading, setLoading] =useState(true);

  useEffect(() => {
    agent.Catalog.list().then(products => setProducts(products))
    .catch(error => console.log(error))
    .finally(()=> setLoading(false))
}, []);
if(loading) return <LoadingComponenet message="Loading products.."/>

    return (
        <>
       <ProductList products={products}/>
    
        </>
    )
}