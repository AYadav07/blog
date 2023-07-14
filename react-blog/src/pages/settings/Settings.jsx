import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import image from '../../assets/img/person2.jpeg'
export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle"> Update Your Account</span>
            <span className="settingsDeleteTitle"> Delete Account</span>
          </div>
          <form className="settingsForm">
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
              <img src={image} alt="" />
              <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id='fileInput' style={{display:'none'}}/>
            </div>
            <label> Username</label>
            <input type="text" placeholder='Amar'/>
            <label> Email</label>
            <input type="email" placeholder='amar@gmail.com'/>
            <label> Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar />
    </div>
  )
}
