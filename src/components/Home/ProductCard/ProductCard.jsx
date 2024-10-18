import { useSelector } from 'react-redux';
import { useAddProductToCart } from '../../../hooks/queries/useAddProductToCart';
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../hooks/queries/useCart';

const ProductCard = ({ product }) => {
    const { mutate } = useAddProductToCart();
    const { data, isLoading  } = useCart();
    const isLogged = useSelector(store => store.auth.isLogged);
    const navigate = useNavigate();

    let isProductInCart = data?.some(cartProduct => cartProduct.productId === product.id);

    const isAddVisible = !isLogged || !isProductInCart;

    const handleAdd = (e) => {
        e.preventDefault();

        if (!isLogged) navigate("/login");
        else mutate({ quantity: 1, productId: product.id });
    }
    
  return (
    <section className='product_card_container'>
        <section className='product_card_data'>
            <div className='product_card_img' >
                <img className='card_img visible' src={product.images[0]?.url} alt={product.title + "image 1"} />
                <img className='card_img hidden' src={product.images[1]?.url} alt={product.title + "image 2"} />
            </div>
            
            <div className='product_card_details'>
                <p className='sub_name'>{product.brand}</p>
                <h2 className='info_data'>{product.title}</h2>
    
                <p className='sub_name'>Price</p>
                <h3>
                    <em className='info_data_price'>${product.price}</em>
                </h3>
            </div>
        </section>
        { isAddVisible &&(
            <div className='dv_btn_add'>
                <button className='bnt_add_to_cart_card' onClick={handleAdd} disabled={isLoading}>
                <i className='bx bx-cart-add'> Add</i>
                </button>
            </div>
        )}

        { !isAddVisible && <p className='p_product_in_cart_text'>Product in the cart</p>}
        
    </section>
  )
}

export default ProductCard