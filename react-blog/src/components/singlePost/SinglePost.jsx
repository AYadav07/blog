import './singlePost.css'
import postImg from '../../assets/img/img2.jpg'
export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={postImg} alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Good thing happens to good people.
                <div className="singlePostEdit"> 
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'> Author: <b>Amar</b></span>
                <span className='singlePostDate'> 1 min ago</span>
            </div>
            <p className='singlePostDesc'>
            Title: Unveiling the Extraordinary: A Journey into the Life of [Your Name]

                Introduction:
                Every now and then, we come across individuals who radiate a certain aura, captivating our attention and inspiring us to explore the realms of possibility. Today, we embark on a remarkable journey into the life of [Your Name], a person whose vibrant spirit, unwavering determination, and unique perspective on life make them an extraordinary force to be reckoned with.

                A Passionate Soul:
                At the core of [Your Name]'s being lies an unwavering passion for life and a relentless pursuit of their dreams. Whether it's delving into the realms of art, science, or social justice, they embrace each endeavor with an insatiable curiosity and an unyielding dedication to make a difference. Their drive to excel and leave a lasting impact on the world is nothing short of awe-inspiring.

                A Multifaceted Talent:
                [Your Name] defies categorization, effortlessly blending various talents and interests to create a tapestry of creativity and ingenuity. From their proficiency in painting and music to their eloquence in writing and public speaking, they constantly challenge themselves to push boundaries and explore new artistic avenues. Their multifaceted nature serves as a reminder that limitations are mere illusions in the face of boundless imagination.

                A Catalyst for Change:
                Beyond their artistic endeavors, [Your Name] is a passionate advocate for social change and equality. Their unwavering commitment to creating a more just and inclusive society has led them to actively engage in community initiatives, raise awareness about pressing issues, and inspire others to take action. They firmly believe that each person has the power to make a difference, and they lead by example, igniting change wherever they go.

                A Visionary Leader:
                [Your Name]'s natural charisma and exceptional leadership skills have made them a guiding light for those around them. Their ability to inspire and motivate others to push past their limits and embrace their true potential is truly remarkable. Whether it's spearheading a team project or providing guidance to those seeking their wisdom, [Your Name] effortlessly balances empathy, innovation, and determination, leaving an indelible mark on those fortunate enough to cross their path.

                Conclusion:
                In a world that often seeks conformity, [Your Name] stands tall as a beacon of authenticity, reminding us all to embrace our unique talents, passions, and perspectives. Their journey serves as a testament to the transformative power of following one's dreams and embracing the richness of life's experiences. As we bid farewell to this glimpse into [Your Name]'s extraordinary life, let us take inspiration from their story and embrace our own potential to create a life that is as vibrant and meaningful as theirs.
            </p>
        </div>
    </div>
    
  )
}
