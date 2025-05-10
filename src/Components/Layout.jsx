import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Settings } from 'lucide-react';
import FloatingPanel from './FloatingPanel';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiFillStar,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

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
  display: flex;
  align-items: center;
  gap: 0.4rem;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  padding: 0.5rem 0;

  &.active {
    color: ${({ theme }) => theme.accent};
  }

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

  svg {
    /* optional: size & color override */
    width: 1.2em;
    height: 1.2em;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function Layout() {
  const navItems = [
    { to: '/',        label: 'Home',     Icon: AiOutlineHome,                  end: true },
    { to: '/about',   label: 'About',    Icon: AiOutlineUser,                  end: false },
    { to: '/projects',label: 'Projects', Icon: AiOutlineFundProjectionScreen, end: false },
    { to: '/resume',  label: 'Resume',   Icon: CgFileDocument,                  end: false },
  ];

  return (
    <>
      <Header>
        <Logo>{'</>'} Portfolio</Logo>

        <Nav>
          {navItems.map(({ to, label, Icon, end }) => (
            <StyledNavLink
              key={to}
              to={to}
              end={end}
            >
              <Icon /> 
              {label}
            </StyledNavLink>
          ))}
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
