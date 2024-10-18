import { useId, useState } from 'react'
import './LoginForm.css'

const LoginForm = ( {onLogin, isLoginError} ) => {
    const emailId = useId();
    const passwordId = useId();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [formData, setFormData] = useState({email: "", password: ""});
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        const newFormData = { ...formData, [name]: value }

        setFormData(newFormData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) return;
        onLogin(formData);
    }

  return (
   <form onSubmit={handleSubmit}>
        <div className='form_label_name'>
            <label htmlFor={emailId}>Email</label>
        </div>
        <input type="email" className='form_input_data' onChange={handleChange} value={formData.email} name="email" id={emailId} required/>
        
        <div className='form_label_name'>
            <label htmlFor={passwordId}>Password</label>
        </div>

        <div className='form_input_btn_visible'>
            <input type={isPasswordVisible ? 'text' : 'password'} className='form_input_data' onChange={handleChange} value={formData.password} name="password" id={passwordId} required/>
            <button className='btn_eye_container' type='button'>
                <i className='bx bx-low-vision btn_eye' onClick={()=>setIsPasswordVisible(!isPasswordVisible)}></i>
            </button>
        </div>

        {(isLoginError) && (
            <div className='p_credencial_error'>
                <p>Invalid credentials!</p>
            </div>
        )}
        
        <div>
            <button type="submit" className='form_btn_login'>Login</button>
        </div>
   </form>
  )
}

export default LoginForm