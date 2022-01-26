import React,{Component} from 'react';

class ProductItem extends Component
{
    render(){
        return (
        <>
            <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.id}</p>
            <p>{this.props.price}</p>
            <p>{this.props.model}</p>     
            </div> 
            <hr></hr>
        </>
        
    )
    }
}
export default ProductItem;
