

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

export default function Resume() {
  return (
    <Container>
      <h1>Portfolio/ Resume Page</h1>
      <div className="shoot-star" />
    </Container>
  )
}
