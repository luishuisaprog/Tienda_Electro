import { Link } from 'react-router-dom';
import imgNotFound from '../../assets/img/404.jpg';
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <section className='notfound_container'>

            <Link to="/">
                <button className='btn_gohome'>
                    Home 
                </button>
           </Link>

        <img src={imgNotFound} alt="" />

        <p>PAGE NOT FOUND - 404</p>

        <div className="loader">
            <span></span>
        </div>
    </section>
  )
}

export default PageNotFound