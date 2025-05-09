import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background} no-repeat center/cover;
    color: ${({ theme }) => theme.text};
    transition: background 0.5s ease, color 0.5s ease;
    font-family: sans-serif;
  }

  /* Shooting star */
  @keyframes shoot {
    0% { transform: translate(-50px, -50px); opacity: 1; }
    100% { transform: translate(100vw, 100vh); opacity: 0; }
  }

  .shoot-star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    animation: shoot 2s ease-in-out infinite;
  }
`;