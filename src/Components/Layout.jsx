import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Settings } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import FloatingPanel from './FloatingPanel';
import Scrollspy from 'react-scrollspy'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.headerBg};
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  padding: 0.5rem 0;

  &.active::after {
    content: '';
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.accent};
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function Layout() {
  return (
    <>
      <Header>
        <Logo>{'</>'} Portfolio</Logo>
        <Nav>
          <StyledNavLink to="/" end>Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/projects">Projects</StyledNavLink>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </Nav>
        <Controls>
          <Settings size={20} style={{ cursor: 'pointer' }} />
        </Controls>
      </Header>

      <FloatingPanel />

      <main>
        <Outlet />
      </main>
    </>
  );
}
