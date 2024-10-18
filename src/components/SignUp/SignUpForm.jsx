import { useState, useId, useEffect } from 'react';
import './SignUpForm.css'
import { createUser } from '../../services/users/createUser';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  
    const emailId = useId();
    const passwordId = useId();
    const firstNameId = useId();
    const lastNameId = useId();
    const phoneId = useId();

  
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({firstName:"", lastName:"", email: "", password: "", phone:""});
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        const newFormData = { ...formData, [name]: value }

        setFormData(newFormData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.phone) return;

        createNewUser(formData);
        
    }

    const createNewUser = async (data) => {
      await createUser(data);
      navigate("/login");
    }

  return (
    <section className='section_form_sign_up'>
            
           <form className='form_sign_up_container' onSubmit={handleSubmit}>
                <div className='form_sign_up_title'>
                    <h2>Create User</h2>
                </div>
                
                <div className='form_label_name'>
                    <label htmlFor={firstNameId}>First Name</label>
                </div>
                <input type="text" className='form_input_data' onChange={handleChange} value={formData.firstName} name="firstName" id={firstNameId} required/>
                
                <div className='form_label_name'>
                    <label htmlFor={lastNameId}>Last Name</label>
                </div>
                <input type="text" className='form_input_data' onChange={handleChange} value={formData.lastName} name="lastName" id={lastNameId} required/>
                
                <div className='form_label_name'>
                    <label htmlFor={emailId}>Email</label>
                </div>
                <input type="email" className='form_input_data' onChange={handleChange} value={formData.email} name="email" id={emailId} required/>
                
                <div className='form_label_name'>
                    <label htmlFor={passwordId}>Password</label>
                </div>

                <div className='form_input_btn_visible'>
                    <input type={isPasswordVisible ? 'text' : 'password'} className='form_input_data' onChange={handleChange} value={formData.password} name="password" id={passwordId} required/>
                    
                    <button className='btn_eye_container' type='button'><i className='bx bx-low-vision btn_eye' onClick={()=>setIsPasswordVisible(!isPasswordVisible)}></i></button>
                </div>

                <div className='form_label_name'>
                    <label htmlFor={phoneId}>Phone</label>
                </div>
                <input type="text" className='form_input_data' onChange={handleChange} value={formData.phone} name="phone" id={phoneId} required/>
                

                <div>
                    <button type="submit" className='form_btn_login'>Sign up</button>
                </div>
          </form>
    </section>
  )
}

export default SignUpForm
