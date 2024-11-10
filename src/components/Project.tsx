
import React from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {
    return (
        <div id="projects" className='pt-[5rem] pb-[3rem] bg-gray-900'>
            <div className='text-center'>
                <p className='heading_mini'>Showcase of My Recent Projects</p>
                <h1 className='heading_primary'>
                    Collection of My <span className='text-cyan-600'>Toolbox</span>
                </h1>
            </div>
            <ProjectCard
                title="API-Quiz-Application"
                tech1="HTML"
                tech2="CSS"
                tech3="Tailwind"
                tech4="JavaScript"
                image="/quiz-app.png"
                description="A dynamic quiz application that fetches questions from an external API and tracks user scores. Built using HTML, CSS, and JavaScript, styled with Tailwind for a modern look."
            />
            <ProjectCard
                title="To-Do-List-App"
                tech1="HTML"
                tech2="CSS"
                tech3="Bootstrap"
                tech4="JavaScript"
                image="/1_0Tm2ahjpE_zqv3Qx6-M_cQ.png"
                description="A simple yet powerful To-Do list application that allows users to manage tasks effectively. Built using HTML, CSS, and Bootstrap for responsive design, with JavaScript for interactivity."
            />
            <ProjectCard
                title="Ticket-Booking-Platform"
                tech1="HTML"
                tech2="Tailwind"
                tech3="TypeScript"
                tech4="JavaScript"
                image="/ticket-formats-with-delivery.png"
                description="A ticket booking platform that enables users to book event tickets with real-time availability. Developed with HTML, Tailwind CSS, TypeScript, and JavaScript for robust functionality and styling."
            />
            <ProjectCard
                title="Typing Speed Tester"
                tech1="HTML"
                tech2="Tailwind"
                tech3="TypeScript"
                tech4="JavaScript"
                image="/wpmtest.png"
                description="An interactive typing speed tester application that measures typing accuracy and words per minute. Implemented using HTML, Tailwind, TypeScript, and JavaScript."
            />
            <ProjectCard
                title="Node Projects"
                tech1="HTML"
                tech2="Tailwind"
                tech3="TypeScript"
                tech4="JavaScript"
                image="/node.png"
                description="A collection of server-side Node.js projects demonstrating API development, database integration, and backend functionality using TypeScript and JavaScript."
            />
        </div>
    )
}

export default Project;
