import React from 'react'
import {Button}  from './Button'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subcription-heading"> 
                    What are you waiting for? 
                </p>
                <p className="footer-subcription-text">
                    Fill out 
                </p>
                
                <div className="input-areas">
                
                    <form>
                        <input type="email" name="email" placeholder="TELUS Email" 
                        className="footer-input"/>
                        <Button buttonStyle="btn--outline">Contact</Button>

                    </form>
                    
                </div>

            
            </section>
        
        </div>
    )
}

export default Footer
