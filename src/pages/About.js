import React from 'react'
import AboutImage from '../images/masala.jpg';
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${AboutImage})` }} >

            </div>
            <div className="aboutBottom">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                    corrupti quas similique unde? Facilis, mollitia dicta ducimus
                    totam odio numquam ipsum, autem cumque cum sapiente soluta deserunt
                    amet quasi eum, in dolor. Doloribus pariatur vel mollitia quae dolor
                    harum. Illum eum aspernatur quod cupiditate nulla! Neque ad sint rerum
                    optio?
                </p>
            </div>
        </div>
    )
}

export default About
