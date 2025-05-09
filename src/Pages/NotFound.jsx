
import React from 'react'
import styled from 'styled-components'
import ThemeToggle from '../Components/ThemeToggle'

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export default function NotFound() {
    return (
      <Container>
        <h1>404 – Page Not Found</h1>
        <p>Sorry, we couldn’t find what you’re looking for.</p>
      </Container>
    );
  }
  