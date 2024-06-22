import Blogs from "./../../data"
import "./home.css"
import Blogcard from "./../../components/blogcard"

function Home() {
    return (
        
        <div className="blogs-container">
         {
          Blogs.map((blogObject , i)=>{
              const {
                id,
                title,
                  content,
                  author,
                  date,
                  categories 
              }= blogObject
  
          
              return (
                <Blogcard
                key={i}
                id={id}
                title={title}
                 content={content}
                 author={author}
                 date={date}
                 categories={categories} 
                 />
             )
         })
        }
        </div>
         
    )
  }
  
  export default Home;
  

/*function Home(){
     
    return (
      <>
      <div className="blogs-container">
       {
        Blogs.map((blogObject , i)=>{
            const {title,
                content,
                blogImg,
                author,
                date,
                categories 
            }= blogObject

            return (
               <Blogcard
               key={i}
               title={title}
                content={content}
                blogImg ={blogImg}
                author={author}
                date={date}
                categories={categories} 
                />
            )
        })
       }
       </div>
      </>
    )

}

export default Home */