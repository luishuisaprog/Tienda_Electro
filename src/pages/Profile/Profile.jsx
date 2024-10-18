import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import imgProfile from "../../assets/img/user.png";
import { reset } from '../../store/slices/authSlice';
import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {fullName, email} = useSelector(store=>store.auth);

  const logout = () => { 
    dispatch(reset()); 
     navigate("/login");
  }

  return (
    <section className="prifile_container">
      <div className="dv_profile_data">
        <img src={imgProfile} alt="" />

        <p>{fullName}</p>

        <span>{email}</span>

        <button className="btn_profile_logout" onClick={logout}>Log out</button>
      </div>
    </section>
  )
}

export default Profile