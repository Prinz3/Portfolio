import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';

const Card = styled.div`
  background: ${({ theme }) => theme.cardBg || '#fff'};
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(138, 134, 134, 0.78);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  &:hover { transform: translateY(-10px); }
`;

const ImageWrapper = styled.div`
  height: 250px;
  background: ${({ bg }) => `url(${bg}) center/cover no-repeat`};
`;

const Content = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textLight};
  
  span {
    background: ${({ theme }) => theme.tagBg};
    padding: 0.50rem 0.75rem;
    border-radius: 0.25rem;
  }
`;

const Title = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.25rem;
  flex: 1;
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  a {
    color: ${({ theme }) => theme.accent};
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-weight: 500;
    &:hover svg { transform: translateX(2px); }
    svg { transition: transform 0.2s; margin-left: 0.25rem; }
  }
`;

export default function ProjectCard({ img, tags, title, link }) {
  return (
    <Card>
      <ImageWrapper bg={img} />
      <Content>
        <Tags>
          {tags.map((t) => <span key={t}>{t}</span>)}
        </Tags>
        <Title>{title}</Title>
        <Footer>
          <a href={link}>View Project <ChevronRight size={16} /></a>
        </Footer>
      </Content>
    </Card>
  );
}
