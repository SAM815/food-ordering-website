import React from 'react';
import photo from '../images/food.jpeg'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className = "home" style={{backgroundImage: `url(${photo})`}}>
      <div className="headerContainer">
        <h1>Home</h1>
        <p>Indian Food at a Click</p>
        <Link to="/menu"><button>Order Now</button></Link>
      </div>
    </div>
  )
}

export default Home
