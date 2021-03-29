import React from 'react';
import './AboutUs.css';
import plate from './plate.png'

const AboutUs = props => (
    <section class="AboutUs_bc">
        <div>
            <div className="strawbarry">
                <img src={plate} alt="plate" />
            </div>
        </div>
        <div className="Intro AboutUS">
            <h1>About Us</h1>
            <p>Abore Cahee magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
Nim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
        </div>
    </section>
)

export default AboutUs