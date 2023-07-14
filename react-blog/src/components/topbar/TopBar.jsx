import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

export default function TopBar() {
  const user=false;
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-linkedin-in"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className='topList'>
                <li className='topListItem'><Link className='link' to="/">HOME</Link></li>
                <li className='topListItem'><Link className='link' to="/">ABOUT</Link></li>
                <li className='topListItem'><Link className='link' to="/">CONTACT</Link></li>
                <li className='topListItem'><Link className='link' to="/write">WRITE</Link></li>
                <li className='topListItem'>{user && <Link className='link' to="/">LOGOUT</Link> }</li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? 
            (<img className='topImg' src="data:image/png;base64,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" alt="Not Found" />
) 
: (<ul className='topList'>
  <li className='topListItem'>
  <Link className='link' to="/login">Login</Link>
  </li>
  <li className='topListItem'>
  <Link className='link' to="/register">Register</Link>
  </li>
  
  
</ul>)
          }
            <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
