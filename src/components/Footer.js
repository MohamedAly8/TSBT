import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          For Business Requests on New or Existing Solutions Please Click Below
        </p>
        <div className='input-areas'>
          <form>
            <Link to='/form'>
            <Button buttonStyle='btn--footer' buttonSize='btn--xlarge'>Funnel Form</Button>
            </Link>

            </form>
        </div>
      </section>


        <div class='footer-links'> 
            <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
                <h2>About Us</h2>

                <Link to='/sign-up'>Our Team</Link>
                <Link to='/'>Current Projects</Link>

            </div>
            <div class='footer-link-items'>
                <h2>Contact Us</h2>
                <Link to='/'>Contact</Link>
                <Link to='/'>Support</Link>
            </div>
            </div>
            <div className='footer-link-wrapper'>

            <div class='footer-link-items'>
                <h2>Social Media</h2>
                <Link to='/'>Youtube</Link>
                <Link to='/'>Twitter</Link>
            </div>
            </div>
        </div>
        <section class='social-media'>
            <div class='social-media-wrap'>
            <div class='footer-logo'>
                <Link to='/' className='social-logo'>
                TSBT
                </Link>
            </div>
            <small class='website-rights'>TELUS © 2021</small>
            <div class='social-icons'>
            
                <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
                >
                <i class='fab fa-youtube' />
                </Link>
                <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
                >
                <i class='fab fa-twitter' />
                </Link>
            
            </div>
            </div>
        </section>
        </div>
  );
}

export default Footer;