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
                title="🪙Crypto Staking Wallet"
                tech1="Nextjs"
                tech2="Typescript"
                tech3="Tailwind"
                tech4="UI Libraries"
                image="/staking.png"
                description="A modern crypto staking wallet built using Next.js, leveraging animations, third-party UI libraries, and React state management tools like useState and context. It enables users to stake, track, and manage crypto assets with a sleek and responsive UI."
                link="https://staking-wallet.vercel.app/" // Add deployed link
            />
            <ProjectCard
                title="🔐Secure Data Vault"
                tech1="Python"
                tech2="Cryptography"
                tech3="Streamlit"
                tech4="Hashlib"
                image="/securevault.png"
                description="A secure data vault built in Python and Streamlit using cryptography, hashlib, and Fernet encryption. It safely encrypts/decrypts sensitive user data and stores it in a .json file, ensuring confidentiality and integrity."
                link="https://secure-data-vault-miraejk.streamlit.app/" // Add deployed link
            />
            <ProjectCard
                title="📚Personal Library Manager"
                tech1="Python"
                tech2="Streamlit"
                tech3="SqLite"
                tech4="sqlAlchemy"
                image="/baytalhikma.png"
                description="A smart library manager to add, delete, and track personal book collections along with read status and time spent. It also provides insightful stats and graphs for better reading habits analy"
                link="https://bayt-al-hikma-project-javeriakamran.streamlit.app/" // Add deployed link
            />
            <ProjectCard
                title="🍽️Food Dyanamic Blog Website"
                tech1="Nextjs"
                tech2="Tailwind"
                tech3="Routing"
                tech4="React-DOM"
                image="/blog.png"
                description="A dynamic blog website that showcases curated restaurant ideas, hotel reviews, and traditional dishes from various countries. Built with dynamic routing to serve rich, location-based food content."
                link="https://milestone-03-blogproject.vercel.app/" // Add deployed link
            />
            <ProjectCard
                title="📄Dynamic Resume Builder"
                tech1="HTML"
                tech2="CSS"
                tech3="TypeScript"
                tech4="JavaScript"
                image="/resumebuilder.png"
                description="A fast and intelligent resume builder that generates a polished resume in seconds based on user-provided information. It dynamically structures content to ensure readability and professional appeal."
                link="https://giaic-hackathn-01-resume-builder.vercel.app/" // Add deployed link
            />
              <ProjectCard
                title="🪑HEKTO Furniture & Wearings UI/UX"
                tech1="Nextjs"
                tech2="Tailwind"
                tech3="TypeScript"
                tech4="UI Libraries"
                image="/hekto.png"
                description="A professionally designed 18-page furniture and apparel e-commerce website developed within a 24-hour hackathon. It features responsive layouts, clean UI, and full product rendering capabilities."
                link="https://giaic-hackathon-02.vercel.app/" // Add deployed link
            />
               
                <ProjectCard
                title="🌍Global CO₂ Emission"
                tech1="Python"
                tech2="KaggleHub"
                tech3="Numpy"
                tech4="Pandas"
                image="/globalco2.png"
                description="An interactive data visualization tool that displays global CO₂ emissions across countries and years using graphs and filters. It also provides actionable insights on reducing emissions and combating global warming."
                link="https://growthmindset-project.streamlit.app/" // Add deployed link
            />
           
            
                <ProjectCard
                title="📊Insightify CSV Analyzer"
                tech1="HTML"
                tech2="Tailwind"
                tech3="TypeScript"
                tech4="JavaScript"
                image="/datadash.png"
                description="A professional tool to upload CSV files and automatically visualize the data with structured summaries and insightful graphs. It processes datasets in sequence, offering clean and interactive analysis."
                link="https://project09simple-data-dashboard-javeriakamran.streamlit.app/" // Add deployed link
            />
                 <ProjectCard
                title="🗺️Country Information Cards"
                tech1="Python"
                tech2="Sreamlit"
                tech3="Matplotlib"
                tech4="Pandas"
                image="/countrycards.png"
                description="An API-based app that displays key information about any country entered by the user, including capital, population, region, area, and currency. It’s fast, reliable, and ideal for quick geopolitical lookups."
                link="https://country-information-cards-miraejk.streamlit.app/" // Add deployed link
            />
        </div>
        
    );
};

export default Project;