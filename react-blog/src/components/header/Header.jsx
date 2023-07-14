import './header.css'
import headImg from '../../assets/img/home.jpg';
export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className='headerTitleSm'>
              React and Node
          </span>
          <span className='headerTitleLg'>
            Blog
          </span>
          <img className='headerImg' src={headImg} alt="" />
        </div>
    </div>
  )
}
