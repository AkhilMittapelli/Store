import { Grid, List} from "@mui/material";
import { Product } from "../../App/Models/Product";
import ProductCard from "./ProductCard";
interface props{
  products: Product[];
}

export default function ProductList({products}:props){
    return(
        <Grid container spacing={4}>
        {products.map((product)=>(
          <Grid item xs={3} key={product.id}>
          <ProductCard product={product}/>
          </Grid>
        ))}
      </Grid>
    )
}