import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../../components/login/Login/LoginForm'
//import { login } from '../../services/auth/login'
import { startSessionThunk } from '../../store/slices/authSlice'



import './Login.css'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useState } from 'react'


const Login = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector((store)=>store.auth.isLogged);
    const location = useLocation();
    
    const [ isLoginError, setIsLoginError ] = useState(false);
    
    const from = location.store?.from;

    const handleLogin = (loginData) => {
        dispatch(startSessionThunk(loginData));
        if(!isLogged) setIsLoginError(true);
    }

  return (
    <section className='page_login_container'>

        <section className='page_login_data'>
            <p className='page_login_text'>Welcome! Enter your email and password to continue</p>   
            <div className='page_login_test_data'>
                <h3 className='test_data_title'>Test data</h3>
                <ul className='test_data_list'>
                    <li className='test_data_item'>
                        <em><i className='bx bx-envelope'></i></em> jesusrodriguez@gmail.com
                    </li>
                    <li className='test_data_item'>
                        <em><i className='bx bx-lock-alt'></i></em> 12345
                    </li>
                </ul>
            </div>

            <LoginForm onLogin={handleLogin} isLoginError={isLoginError} />
        
            <p className='p_sign_up'>
                Don't have an account? <Link className='color_Link' to='/sign_up'>Sign Up</Link>
            </p>

        </section>

        {(isLogged) && <Navigate to={from ?? "/"}/>}

    </section>
  )
}

export default Login