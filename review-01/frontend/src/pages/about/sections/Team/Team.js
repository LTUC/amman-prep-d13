import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './team.scss';

function Team() {
  const [team, setTeam] = useState([]);

  const fetchTeamData = () => {
    axios.get(`${process.env.REACT_APP_SERVER_API}/team`).then(res => {
      setTeam(res.data.team);
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    fetchTeamData();
  }, [])

  return (
    <section className='team-section'>
      <section className="inner-section">
        <h2>Out Team</h2>
        <section className="team-card-container">
          {
            team.map(item =>
              <div className="team-card">
                <img src={item.avatar} alt="" />
                <div>
                  <h3>{item.first_name + ' ' + item.last_name}</h3>
                  <p>{item.expertise}</p>
                </div>
                <div className="social-links">
                  <Link to={item.fb}><i class="fa-brands fa-facebook"></i></Link>
                  <Link to={item.tw}><i class="fa-brands fa-twitter"></i></Link>
                  <Link><i class="fa-brands fa-linkedin"></i></Link>
                  <Link><i class="fa-brands fa-youtube"></i></Link>
                </div>
              </div>
            )
          }
        </section>
      </section>
    </section>
  )
}

export default Team
