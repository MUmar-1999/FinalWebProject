import React from 'react';
import Contact from './Contact';
import Navbar from './Navbar';
import Shop from './Shop';
import About from './About';

const Header = () => {
    return (
        <div className='Banner'>
            <Navbar />
           
            <div className="B_Content">
                <div className="Container">
                    <div className='Banner_text'>
                    <h3> Computer Peripherals </h3>
                    <h1> PC Geeks </h1>
                    <p>
                    Redragon's new 60% layout wired keyboard in a refreshing style with a no-brainer deal economic offer.
                    Compact 61 keys with selected keycaps, dedicated for FPS Gamers and efficient working.
                        </p>
                        <div className='Banner_btn'>
                            <a href='a' className="btn btn-smart">Order Now</a>
                        </div>
                        
                    </div>
            
                    
                </div>
                
            </div>
            <About />
            <Shop />
            <Contact />
        </div>
    )
}

export default Header