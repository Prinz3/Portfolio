

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

export default function Projects() {
  return (
    <Container>
      <h1>This is my Product page and will contain all my projects</h1>
      <div className="shoot-star" />
    </Container>
  )
}
