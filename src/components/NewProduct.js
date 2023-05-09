import './NewProduct.css'
import ProductForm from './ProductForm';

function NewProduct(props) {

    function saveProduct(product){
        console.log("I am inside newProduct")
        console.log(product);

        //calling the parent function and now passing the product(value) to the parent
        props.fromParent(product);
    }

    return (<div className='new-product'>
        <ProductForm onSaveProduct = {saveProduct}/>
    </div>)
}

export default NewProduct;