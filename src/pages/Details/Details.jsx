import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../../components/Profile';
import AboutMe from '../../components/AboutMe';
import Experience from '../../components/Experience';
import Education from '../../components/Education';
import Skills from '../../components/Skills';

const Details = () => {
    return (
        <>
            {/* Top image */}
            <div style={{ backgroundColor: 'Maroon' }} className="p-0 top-image" />
            <div style={{ backgroundColor: 'Maroon' }} className='bg-white'>

                {/* Profile section */}
                <Profile />

                {/* About section */}
                <AboutMe />

                <Experience />

                <Education />

                <Skills />

                <div className="d-grid col-2 mx-auto my-4 text-center">
                    <NavLink style={{ backgroundColor: 'Maroon', color: '#FFFFFF', padding: '0.5rem 1rem', borderRadius: '0.25rem' }} to="/preview">Preview</NavLink>
                </div>

            </div>
        </>
    )
}

export default Details;
