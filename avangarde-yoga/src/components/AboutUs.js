import React from 'react';
import './AboutUs.css';
import strawberry from './strawberry.png'

const AboutUs = props => (
    <section>
        <div className="AboutUS">
            <h1>Fresh Life</h1>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <button>GET FREE NOW</button>
        </div>
        <div>
            <div className="strawbarry">
                <img src={strawberry} alt="strawberry" />
            </div>
        </div>
    </section>
)

export default AboutUs