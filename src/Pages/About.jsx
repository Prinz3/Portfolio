// src/Pages/About.jsx
import React from 'react';
import styled from 'styled-components';

const Page = styled.main`
  max-width: 1000px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  font-family: 'Inter', sans-serif;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, ${({ theme }) => theme.accent}, ${({ theme }) => theme.accentLight});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 4rem;
  background-color: ${({ theme }) => theme.sectionBg || 'rgba(255, 255, 255, 0.03)'};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 4rem;
    height: 4px;
    background: ${({ theme }) => theme.accent};
    border-radius: 2px;
  }
`;

const SubHeading = styled.h3`
  font-size: 1.4rem;
  margin: 1.5rem 0 1rem;
  color: ${({ theme }) => theme.accentLight || theme.accent};
`;

const Paragraph = styled.p`
  margin-bottom: 1.2rem;
  font-size: 1.05rem;
  line-height: 1.8;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;

  li {
    position: relative;
    padding-left: 1.8rem;
    margin-bottom: 1rem;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.accent};
      font-weight: bold;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.2rem;
  margin: 1.5rem 0;
`;

const TechCard = styled.div`
  background: ${({ theme }) => theme.cardBg || 'rgba(255, 255, 255, 0.08)'};
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.textLight};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background: ${({ theme }) => theme.accent};
    color: #fff;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(to right, transparent, ${({ theme }) => theme.accent}, transparent);
  margin: 2rem 0;
  opacity: 0.5;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
`;

export default function About() {
  return (
    <Page>
      <PageTitle>About Me</PageTitle>
      
      <Section>
        <Heading>Education</Heading>
        <Paragraph>
          With a strong foundation in <Highlight>Digital Production Design and Development</Highlight> at Barnsley College, I am eager to take the next step by pursuing the <Highlight>Digital & Technology Solutions Degree Apprenticeship</Highlight> with Arm. My passion for technology stems from curiosity about software development, programming languages, and the ever-evolving digital landscape. This program represents an exciting opportunity to learn, earn, and innovate within a globally respected technology company.
        </Paragraph>
        <Paragraph>
          During my studies I developed key technical skills in data analysis, software development, and system management. My coursework provided a solid understanding of programming fundamentals, operating systems, and business technology applications. I refined my problem-solving abilities through projects requiring logical thinking, collaboration, and creativity, and bolstered my communication skills by presenting technical concepts clearly.
        </Paragraph>
      </Section>

      <Section>
        <Heading>Industry Placement</Heading>
        <Paragraph>
          As part of my T Level course I completed a 315-hour placement at <Highlight>ZZC Group</Highlight>, a technology solutions company specializing in software development and IT support. My role involved:
        </Paragraph>
        <List>
          <li><strong>Software Development</strong> – Coding web applications using HTML, PHP, jQuery, SCSS, and SQL.</li>
          <li><strong>Technical Problem-Solving</strong> – Translating verbal and illustrated briefs into functional code.</li>
          <li><strong>Team Collaboration</strong> – Working alongside developers to create innovative solutions.</li>
          <li><strong>UI/UX Design</strong> – Designing user-friendly interfaces and enhancing system functionality.</li>
        </List>
        <Paragraph>
          This experience deepened my understanding of real-world development, letting me contribute to live projects while honing debugging, troubleshooting, and teamwork skills—and reinforced my passion for continuous learning.
        </Paragraph>
      </Section>

      <Section>
        <Heading>Skills &amp; Technologies</Heading>

        <SubHeading>Programming Languages</SubHeading>
        <Grid>
          {['HTML5', 'CSS3/SCSS', 'JavaScript', 'PHP', 'SQL']
            .map((lang) => <TechCard key={lang}>{lang}</TechCard>)
          }
        </Grid>

        <Divider />

        <SubHeading>Frameworks &amp; Libraries</SubHeading>
        <Grid>
          {['jQuery', 'Bootstrap', 'React Basics']
            .map((fw) => <TechCard key={fw}>{fw}</TechCard>)
          }
        </Grid>

        <Divider />

        <SubHeading>Tools &amp; Software</SubHeading>
        <Grid>
          {['Git', 'VS Code', 'Figma', 'Adobe XD']
            .map((tool) => <TechCard key={tool}>{tool}</TechCard>)
          }
        </Grid>
      </Section>

      <Section>
        <Heading>Personal Interests &amp; Goals</Heading>
        <Paragraph>
          Beyond academics, I am a <Highlight>fitness enthusiast</Highlight>, dedicating time to strength training and nutrition. My passion for health instils discipline, consistency, and a goal-oriented approach that complements my technical mindset.
        </Paragraph>
        <Paragraph>
          I enjoy exploring new technologies and coding challenges, continuously enhancing my expertise. I'm particularly excited by opportunities in <Highlight>Machine Learning</Highlight>, <Highlight>Data Science</Highlight>, and <Highlight>Software Development</Highlight>—especially at Arm, where I can learn from industry leaders and contribute to groundbreaking solutions.
        </Paragraph>
        <Paragraph>
          After completing the apprenticeship, my ambition is to build a long-term career at Arm, leveraging my skills to drive technological advancements and create meaningful solutions in a collaborative, forward-thinking environment.
        </Paragraph>
      </Section>
    </Page>
  );
}