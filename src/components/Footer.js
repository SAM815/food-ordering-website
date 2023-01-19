import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <TwitterIcon />
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon />
             
            </div>
            <p>&copy; 2022 IndianFood.com</p>
        </div>
    )
}

export default Footer
