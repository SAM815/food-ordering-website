import React from 'react'

function MenuItem({image, name, price}) {
  return (
   <div className="menuItem">
    <div style = {{backgroundImage: `url(${image})`}}> </div>
        <h1>{name}</h1>
        <p>${price}</p>
   
   </div>
  )
}
//we are going to map through the data and grab the data from data.js
//and everysingle object will be given one of this container
//which will be saving its image, title, and price
//every single container will be loading and data will be having its own card
export default MenuItem
