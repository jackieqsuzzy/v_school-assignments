import React from "react"


function BlogContainer(props){
    return (
         <div className = "contentBlogContainer">
            <h1 className = "styleTitleH1">{props.title}</h1>
            <h2 ClassName = "styleTitle">{props.subTitle}</h2>
            <h3 className = "styleAuthor">
            Posted by {props.author}    on {props.date}</h3> 
        </div>
        
        
       
    )
}


export default BlogContainer