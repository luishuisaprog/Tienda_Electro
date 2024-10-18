import { Link } from 'react-router-dom';
import { useProducts } from '../../../hooks/queries/useProducts';
import ProductCard from '../ProductCard/ProductCard';

import './ProductList.css';

const ProductList = ({ categories, title, excludeIds = [] }) => {
  const { data, isLoading, isError } = useProducts(categories, title);
    
  if (isLoading) return <p>Loading product</p>

  if (isError) return <p>Algo salio mal</p>

  return (
    <ul className="product_list_container">
    {data.filter(product => !excludeIds.includes(product.id)).map(product => <li key={product.id}>
                           <Link to={"/product/" + product.id}>
                                <ProductCard product={product}/>                          
                           </Link>                      
                        </li>)}
  </ul>
  )
}

export default ProductList