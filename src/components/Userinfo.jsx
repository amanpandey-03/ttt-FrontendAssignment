import React from 'react'
import "./Userinfo.css";

const Userinfo = () => {
  return (
    <div>
    {/* Div for profile pic and Followers count section */}
    <div className='userinfo'>
        {/* Div for left Profile picture */}
        <div className="profile-pic"> 
          <img className='dp' src="https://pbs.twimg.com/profile_images/1148507476578275328/fsrvymGR_400x400.jpg" alt="Anuj" />
        </div>

        {/* Div for right Info section */}
        <div className="info">

          {/* Div for name */}
          <div className="name">
          <h3>Anuj Gosalia</h3>
          </div>

          {/* Box for followers and dollow count*/}
          <div className="follow">
            <div className="followers">
              <div className="count">
                6482
              </div>
              <p>Followers</p>
            </div>
            <div className="following">
              <div className="count">
                260
              </div>
              <p>Following</p>
            </div>
          </div>
        </div> 
    </div>

    {/*Div for Bio */}
    <div className="bio">
      <p>Co-founder & CEO at terribly tiny tales</p>
      <a href="www.instagram.com" className="link">https://www.instagram.com/anujgosalia</a>

      <div className="highlights">

        <div className="stars hlt">125</div>
        <div className="upvote hlt">12</div>
        <div className="views hlt">57.8K</div>
        <div className="likes hlt">26.0K</div>

      </div>

    </div>
  </div>
  )
}

export default Userinfo
