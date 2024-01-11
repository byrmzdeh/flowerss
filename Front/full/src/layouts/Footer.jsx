import React from 'react'
import '../sass/footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="one">
                <h2>Mary Byrdd</h2>
                <div className="input">
                    <input type="text" placeholder='Your Email' />
                    <button>Send</button>
                </div>
            </div>

            <div className="two">
                <h2>About</h2>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Our Partners</a></li>
                    <li><a href="">Our Services</a></li>
                </ul>
            </div>

            <div className="two">
                <h2>Contact</h2>
                <ul>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">FAQ Page</a></li>
                    <li><a href="">About Me</a></li>
                </ul>
            </div>

            <div className="two">
                <h2>Follow Us</h2>
            </div>
        </div>
    )
}

export default Footer