import './post.css';
import image1 from '../../assets/img/img1.jpg'
export default function Post() {
  return (
    <div className='post'>
        <img className="postImg" src={image1} alt="" />
        <div className="postInfo">
            <div className="postCategory">
                <span className="postCat">Music </span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Good thing happens with good people.
            </span>
            <hr /><span className="postDate">1 min ago</span>
        </div>
        <p className="postDesc">
        Unveiling the Extraordinary: A Journey into the Life of people.
        At the core of [Your Name]'s being lies an unwavering passion for life and a relentless pursuit of their dreams. Whether it's delving into the realms of art, science, or social justice, they embrace each endeavor with an insatiable curiosity and an unyielding dedication to make a difference. Their drive to excel and leave a lasting impact on the world is nothing short of awe-inspiring.
        </p>
    </div>
  )
}
