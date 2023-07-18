import './sidebar.css';
import firstImage from '../../assets/img/person2.jpeg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  const [cate,setCate] = useState([]);

  useEffect(()=>{
    const getCate = async ()=>{
      const res = await axios.get("http://localhost:5000/api/category");
      setCate(res.data);
    };
    getCate();
  },[])
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'> ABOUT ME </span>
        <img src={firstImage} alt="" />
        <p>
          Today, we embark on a remarkable journey into the life of person, a person whose
           vibrant spirit, unwavering determination, and unique perspective on life make
          them an extraordinary force to be reckoned with.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cate.map(c=>(
            <Link to={`/?category=${c.name}`} className='link'><li className="sidebarListItem">{c.name}</li></Link>
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocials">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-linkedin-in"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}
