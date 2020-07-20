import React from "react"
import BlogPost from "./BlogPost"
import BlogContainer from "./BlogContainer"

function BlogList (){
    const mappedBlog = BlogPost.map(blog => <BlogContainer title = {blog.title} subTitle = {blog.subTitle} author = {blog.author} date = {blog.date}/>)
    return (
        <div className = "allContent">{mappedBlog}</div>
        
    )
}


export default BlogList