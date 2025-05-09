import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  background: ${({ theme }) => theme.background} no-repeat center/cover;
  color: #fff;
  padding: 0 2rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    max-width: 600px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 500;
    transition: background 0.2s;
  }

  .primary {
    background: ${({ theme }) => theme.accent};
    color: #fff;
    &:hover {
      background: darken(${({ theme }) => theme.accent}, 10%);
    }
  }

  .secondary {
    border: 2px solid #fff;
    color: #fff;
    background: transparent;
    &:hover {
      background: rgba(255,255,255,0.1);
    }
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <h1>Hello, I’m Ifeoluwa Thomas</h1>
      <p>
        Frontend Developer & UI/UX Designer creating beautiful, performant
        digital experiences.
      </p>
      <Buttons>
        <Link to="/projects" className="primary">
          View Projects
        </Link>
        <Link to="/contact" className="secondary">
          Contact Me
        </Link>
      </Buttons>
    </HeroSection>
  );
}
