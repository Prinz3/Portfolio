import React from 'react'
import styled from 'styled-components'
import ThemeToggle from '../Components/ThemeToggle'
import Hero from '../Components/Hero';
import ProjectCard from '../Components/ProjectCard';
import daycloud from '../assets/daycloud.jpg';      // sample images
import starfield from '../assets/starfield.jpg';
import Suremailer from '../assets/Suremailer.png';
import MovieDatabase from '../assets/MovieDatabase.png';


const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
`;
export default function Home() {
  const projects = [
    { img: daycloud, tags: ['HTML','CSS','JavaScript'], title: 'Project One', link: '/projects/1' },
    { img: starfield,     tags: ['PHP','Laravel'],           title: 'Project Three', link: '/projects/3' },
    { img: Suremailer,    tags: ['PHP','HTML', 'CSS'],       title: 'Project Two', link: '/projects/2' },
    { img: MovieDatabase, tags: ['Aspnet Core MVC','Html','Css'],       title: 'Project Four', link: '/projects/4' },


  ];

  return (
    <>
      <Hero />

      <Section>
      <h2 style={{ textAlign: 'center' , textDecoration: 'underline', textDecorationColor: 'orange'}}>Featured Projects</h2>
      <Grid>
          {projects.map((p) =>
            <ProjectCard key={p.title} {...p} />
          )}
        </Grid>
      </Section>
    </>
  );
}
