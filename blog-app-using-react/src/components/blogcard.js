//rfce
import "./blogcard.css"
import {Link } from 'react-router-dom'
function Blogcard({id,title,
    content,
    author,
    date,
    categories }) {
  return (
    <Link  className="blog-container"  to={`/blog/${id}`}>
        <div className="author-card">
            <img src={author.authorImg} className="author-img"/>
            <p className="author-name">{author.name}</p>
        </div>
    <div className="blog-card">
      <div >
        <h1 className="blog-title">{title}</h1>
        <p className="blog-content">{content.substring(0,60)}...</p>
        <hr className="hr-row"/>
         <p >{date }</p>
         <p className="category-list" >{categories.map((category, idx) => (
              <span className="category" key={idx}>{category}</span>
            ))}</p>
      </div>
      </div>
    </Link>
  )
}

export default Blogcard