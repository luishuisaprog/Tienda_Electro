import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../../store/slices/authSlice';
import './Header.css'
import { useCart } from '../../../hooks/queries/useCart';

const Header = ({ updateCarVisible, closeCart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((store) => store.auth.isLogged);
  const { data } = useCart();

  //const cartContainer = document.querySelector('.cart');

  const userTo = isLogged ? "/profile" : "/login";
  const puchaseTo = isLogged ? "/purchases" : "/login" ;

  const logout = () => { 
    dispatch(reset()); 
    closeCart();
    navigate("/login");
  }

  const handleCartClik = () => {
      if (isLogged) updateCarVisible();
      else navigate("/login");
    
  }

  const getClass = ({ isActivate }) => {
    if (isActivate) return "header_navlink_items header_navlink_items--activate"
    else return "header_navlink_items"
  }

  // document.addEventListener('click', (event) => {
      
  //       if (!cartContainer.contains(event.target) && updateCarVisible == true) {
  //         //cartContainer.style.display = 'none';
  //         closeCart();
  //       }
  //       event.stopPropagation();
  //       console.log(event)
  //     });


  return (
    <header className='header_container'>
      <div className='header_title'>
        <Link to="/">
          <h1>e-commerce</h1>
        </Link>
      </div>

     
        <div className='header_list_item'>
          <ul className='header_list'>

            <NavLink to={userTo} className={getClass}>
              <li className='header_item'>
                  <i className='bx bx-user'></i>  
              </li>
            </NavLink>

            <NavLink to={puchaseTo} className={getClass}>
              <li className='header_item'>
                  <i className='bx bx-box'></i>
              </li>
            </NavLink>

           
              <li className='header_item' onClick={()=>{}}>
                 <button onClick={handleCartClik} className='btn_cart shopping_cart'>
                  <i className='bx bx-cart' ></i>
                  { data?.length >= 1 && isLogged && (
                                    <div className='dv_data_length'>
                                      <span>{data.length}</span>
                                    </div>
                 )}
                </button>
                 
              </li>
            

              { isLogged && (
                <li className='li_btn_log_out'>
                    <button className='btn_log_out' onClick={logout}><i className='bx bx-log-out'></i></button>
                </li>
              )}
          </ul>

        </div> 
    
      
      

    </header>
  )
}

export default Header