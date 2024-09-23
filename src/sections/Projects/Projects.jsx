import React from 'react';
import styles from './Project.module.css';
import WFA from '../../assets/WFA.jpg';
import MW from '../../assets/MW.jpg';
import DENLP from '../../assets/DENLP.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
    return <section id = "projects" className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
            <ProjectCard 
            src={WFA}
            link="https://github.com/KalimMulani/Weather-Forecast-Application" 
            h3="Weather Forecast Application"
            p="This project is a weather forecast application that provides real-time weather updates for any location. It uses the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface. The application is built using HTML, CSS, and JavaScript, ensuring a responsive design and seamless user experience."
            />

            <ProjectCard 
            src={MW}
            link="https://github.com/KalimMulani/Matrimonial-Website" 
            h3="Matrimonial Site"
            p="This is a full-stack matrimony website developed with HTML, CSS, and JavaScript for the frontend, and PHP with MySQL for the backend. It enables users to create profiles, search for matches, and manage preferences. The dynamic platform ensures smooth user interaction and efficient database management for an enhanced matchmaking experience."
            />

            <ProjectCard 
            src={DENLP}
            link="https://github.com/KalimMulani/Data-Extraction-and-NLP"
            h3="Data Extraction and NLP"
            p="The project employs web scraping techniques using the Beautiful Soup library to extract relevant information from web pages, followed by powerful NLP tasks using the NLTK library. The extracted and processed data is managed and analyzed using the Pandas library, ensuring a seamless and efficient workflow for data handling and analysis."
            />


            </div>
    </section>
}

export default Projects;