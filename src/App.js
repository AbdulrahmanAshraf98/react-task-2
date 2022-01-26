import React,{Component} from 'react';
import ProductList from './Component/product.list/index';
class App  extends Component{
  constructor()
  {
    super();
    this.state = {
      product:[{
        id:"1",
        name:"laptop",
        price:"100000",
        model:2019
      },
      {
        id:"2",
        name:"phone",
        price:"10000",
        model:2010
      },{
        id:"3",
        name:"tv",
        price:"900000",
        model:2022
      }]
    }
  }
 render() {
    return (
      <>
          <ProductList productData={this.state.product}/>
      </>
      )
 }
}

export default App;
