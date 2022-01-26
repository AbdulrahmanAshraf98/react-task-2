
import ProductItem from './product-item/index';
import React,{Component} from 'react';

class ProductList extends Component{
    
    render() {
        let products=this.props.productData;
        return (
           <>
                    {
                    products.map((product)=>{
                    return (
                        <ProductItem id={product.id} name={product.name} price={product.price} model={product.model}/>
                        )
                            })
                    }
           </>  
        )
     }
 
    }
   

export default ProductList