import { useNavigate, useParams } from 'react-router-dom'
import { useProductById } from '../../hooks/queries/useProductById';
import ProductList from '../../components/Home/ProductList/ProductList';
import { useEffect, useState } from 'react';
import { useAddProductToCart } from '../../hooks/queries/useAddProductToCart';
import { useSelector } from 'react-redux';
import { useCart } from '../../hooks/queries/useCart';
import './ProductDetail.css'

const ProductDetail = () => {

   const { productId } = useParams();
   const { data, isLoading, isError, error } = useProductById(productId);
   const { mutate } = useAddProductToCart();
   const isLogged = useSelector(store => store.auth.isLogged);
   const navigate = useNavigate();
   const cartQuery = useCart();

   let isProductInCart = cartQuery.data?.some(cartProduct => cartProduct.productId === data.id) ?? false;

   let quantityInCart = cartQuery.data?.find((cartProduct) => Number(cartProduct.productId) === Number(productId))?.quantity ?? 1;

   const [quantity, setQuantity] = useState(quantityInCart);

   const increment = () => {
        const newQuantity = quantity + 1;
        const stock = 15;
        if (newQuantity <= stock) setQuantity(newQuantity);
   }

   const decrement = () => {
        const newQuantity = quantity - 1;
        if (newQuantity >= 1) setQuantity(newQuantity);
    }
   
   const hanldeAddCart = () => {
    if (isLogged) mutate({quantity,productId});
    else navigate("/login");
   }


   useEffect(() => {
     setQuantity(quantityInCart);
   }, [quantityInCart])


   if (isLoading) return <p>Loading Products</p>;

   if (isError) return <p>{error.message ?? 'Not load'}</p>


  return (
    <section className='product_detail_container'>
        <section className='product_detail_data'>
            <section className='product_detail_img'>
                <img src={data.images[0]?.url} alt={data.title} />
            </section>

            <section className='product_detail_item'>
                <h3>{data.brand}</h3>

                <h2>{data.title}</h2>

                <p>
                 {data.description}
               </p>

                <div className='product_detail_info'>
                    <div >
                        <h3>Price</h3>
                        <p className='p_price'>
                            <em>$ {data.price} </em>
                        </p>
                    </div>

                    <div>
                        <h3>Quantity</h3>

                        <div className='dv_quantity'>
                            <button className='btn_quantity' onClick={decrement}> - </button>
                            <p>{quantity}</p>
                            <button className='btn_quantity' onClick={increment}> + </button>
                        </div>
                    </div>
                </div>
                {!isProductInCart && <button className='btn_add-to-cart' onClick={hanldeAddCart}>Add to cart</button>}
                
                {isProductInCart && <button>Update in cart</button>}
            </section>
            
        </section>

        <div className='similar_items'>
            <p className='similar_items_p'>Discover similar items</p>
            <ProductList categories={data.categoryId} excludeIds={[data.id]} />
          
        </div>
       
    </section>
  )
}

export default ProductDetail