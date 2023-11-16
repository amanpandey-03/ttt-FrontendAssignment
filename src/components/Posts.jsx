import React from 'react'
import "./Posts.css"
import {FcInfo} from "react-icons/fc";

const Posts = () => {
  return (
    <div className='cards'>

        <div className="heading">
            <div className="topic">
                <strong className="topic">A New Dawn</strong>
            </div>
            <FcInfo/>
        </div> 
        <div className="article">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        </div>
        
        <div className="postfoot">
          <div className="type">
              <p className="posttype">musings</p> by anujgosalia
          </div>
          <div className="postinfo">
           <span> August 2 &#183; 2 mins read &#183; 102 views</span> 
          </div>
        </div>
      
    </div>
  )
}

export default Posts
