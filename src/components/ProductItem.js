import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {  

  const [title,setTitle] = useState(props.title);

  // In React, updating state using the setter function (setTitle in this case) triggers a re-render of the component, which means that the component will get rendered again with the updated state values.

  // So, even though title is declared as a constant variable using const, its value can still be updated indirectly by using the setTitle function. However, you cannot directly reassign the value of title like this: title = "Tinda";, because it would violate the rules of const declaration.

  let update = false;
  function clickHandler(){
    // title = "Tinda";
    if(update){
      setTitle("Tinda");
      update = false;
      console.log(update);
    }else{
      setTitle("Nirma");
      update = true;
      console.log(update);
    }
  }
  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductItem;