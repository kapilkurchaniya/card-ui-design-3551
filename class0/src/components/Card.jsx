import React from 'react'
import FollowButton from './followbtn'

const Card = ({elem , idx }) => {
  return (
    <div idx={idx} className='design-card'>
      <img  src={elem.imageURL} alt="" />
        <h2>{elem.userName} <i id="verified-badge" class="ri-verified-badge-fill"></i></h2>
        <p className="user-role">{elem.userRole}</p>
        <p className='user-desc'> {elem.userDesc}</p>
       
       <div className="details">
        <p className='follow'>Followers: {elem.userFollower}</p>
        <p className='post'>Posts: {elem.userPost}</p>
        </div>
<FollowButton />

</div>
  )
}

export default Card
