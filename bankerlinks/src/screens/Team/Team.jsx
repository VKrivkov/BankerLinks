import React from 'react'
import './Team.css';
import bankerlinks from '../../assets/bankerlinks.svg'
import team from '../../assets/team.webp'
import Member from '../../components/Member/Member';

const Team = () => {
  return (
    <>
    <div className='header'  id='team'>
        <div className="header-container">
        <div className="overlay">
            <img src={bankerlinks} alt="BankerLinks" className="overlay-image" />
          </div>
          <h2 className="header-text">
            <span className="hidden-text"> BankerLinks </span> Team
          </h2>

        </div>
        <p>Dedicated professionals with deep industry expertise</p>
      </div>
      <div className='team-container'>
        <img className = 'team-image' src = {team} alt = 'BankerLinks team'/>
        <div className='member-container'>
          <Member 
            name = "Team Member"
            position = "Position"
            p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            color='#2D3B97'
          />
          <Member 
            name = "Team Member"
            position = "Position"
            p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            color='#EE220D'
          />
          <Member 
            name = "Team Member"
            position = "Position"
            p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            color='#EE220D'
          />
          <Member 
            name = "Team Member"
            position = "Position"
            p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            color='#2D3B97'
          />
        </div>
      </div>
    </>
  )
}

export default Team