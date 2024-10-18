import { useEffect, useState } from 'react'
import { useUpdateCart } from '../../../hooks/queries/useUpdateCart';
import { useSelector } from 'react-redux';
import { useDeleteProductFromCart } from '../../../hooks/queries/useDeleteProductFromCart';
import './CartProduct.css'

const CartProduct = ( { cartProduct } ) => {
    const initialQuantity = Number(cartProduct.quantity);
    const price = Number(cartProduct.product.price);
    const { mutate, isLoading } = useUpdateCart();
    const deleteMutation = useDeleteProductFromCart();
    const [quantity, setQuantity] = useState(initialQuantity);
    const isLogged = useSelector(store => store.auth.isLogged);

    const increment = () => {
        const newQuantity = quantity + 1;
        const stock = 10;
        if (newQuantity <= stock) setQuantity(newQuantity);
    };
    
    const decrement = () => {
        const newQuantity = quantity - 1;
        if (newQuantity >= 1) setQuantity(newQuantity);
    };

    const handleUpdate = () => {
        if (isLogged) mutate({cartProductId: cartProduct.id, newQuantity: quantity });
    }

    const handleDelete = () => {
        if (isLogged) deleteMutation.mutate(cartProduct.id);
    }

  

      // useEffect(()=>{
        
      // },[quantity]);

  return (
    <article className='cart_product_container'>
                                                    
        <div className='dv_cart_product_img'>
           <img src={cartProduct.product.images[0].url} alt={cartProduct.product.images} />
        </div>
        <div className='dv_data_container'>
             <header className='header_cart_product'>
                    <h4>{cartProduct.product.title}</h4>
                 <button className='btn_delete_cart_product' onClick={handleDelete} disabled={deleteMutation.isLoading}>
                    <i className='bx bxs-trash'></i>
                 </button>
             </header>
             <div className='dv_btns_quantity_product'>
                 <button onClick={decrement}> - </button>
                      <p> {quantity} </p>
                 <button onClick={increment}> + </button>
             </div>

                {initialQuantity !== quantity && <button className='btn_update_product_cart' onClick={handleUpdate} disabled={isLoading}>Update Cart</button>}

              <div className='dv_cart_product_price'>
                 <h5>Total:</h5>
                 <p>
                     <em>$ {(initialQuantity * price).toFixed(2)}</em>
                </p>
             </div>
        </div>
                                                  
</article>
  )
}

export default CartProduct