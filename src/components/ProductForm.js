import { useState } from 'react';
import './ProductForm'

function ProductForm(props) {

    // const [fullProductInput,setFullProductInput] = useState({
    //     title : '',
    //     date : '' 
    // });

    // function setFullProductInput(prevState, event){
        //return object with updated parameters
    //     return {...prevState,event.target.value};
    // }

    const [newTitle,setTitle] = useState("");
    const [newDate,setDate] = useState("");


    function titleChangeHandler(event){
        setTitle(event.target.value);
        // console.log(event.target.value);
    }
    function dateChangeHandler(event){
        setDate(event.target.value);
        // console.log(event.target.value);
        // console.log(date);
        // console.log(title);
    }

    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title : newTitle,
            date : newDate
        };

        // console.log(productData);
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }
    
    return (
    <form onSubmit={submitHandler}>
        <div className='new-product_controls'>
            <div className='new-product_control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} value={newTitle} required></input>
            </div>
            <div className='new-product_control'>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler} value={newDate} min='2023-01-01' max='2023-12-12' required></input>
            </div>
            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>
        </div>
    </form>)
}

export default ProductForm;