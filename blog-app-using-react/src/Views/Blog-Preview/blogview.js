import React from 'react';
import { useParams } from 'react-router-dom';
import Blogs from "./../../data";
import "./blogview.css";

function BlogView() {
    const { id } = useParams();
    const selectedBlogs = Blogs.find((blogObject) => blogObject.id == id);

    return (
        <div className="container">
            <div className="heading">
                <h1 className='heading-title'>{selectedBlogs.title}</h1>
                <div className="author-date">
                    <img src={selectedBlogs.author.authorImg} alt="Author Image" className="author-img" />
                    <div className='autherInfo'>
                        <p className="author-info">{selectedBlogs.author.name}</p>
                        <p className="author-info">{selectedBlogs.date}</p>
                    </div>
                </div>
            </div>
            <img src={selectedBlogs.blogImg} className="blog-img" alt="Blog" />
            <div>
                <p className="content">{selectedBlogs.content}</p>
            </div>
            <div className="categories">
                <p className='cat-element'>Categories:&ensp;&ensp; {selectedBlogs.categories.join(', ')} &ensp;&ensp;</p>
            </div>
        </div>
    );
}

export default BlogView;
