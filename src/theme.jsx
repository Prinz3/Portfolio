import { createGlobalStyle } from 'styled-components';
import daycloud from './assets/daycloud.jpg';
import starfield from './assets/starfield.jpg';

export const lightTheme = {
  backgroundImage: `linear-gradient(to bottom, #a0d8f1, #ebf5fc)`,
  text:        '#1f2937',
  textLight:   '#4b5563',
  headerBg:    '#ffffff',
  accent:      '#3b82f6',
  cardBg:      '#ffffff',
  tagBg:       '#eef2f7',
  planet:      '#F4B183',
  flare:       '#FFFACD',
  fontSize:    16,
};

export const darkTheme = {
  backgroundImage: `linear-gradient(to bottom, #0b0c10, #1f2833)`,
  text:        '#f8f9fa',
  textLight:   '#9ca3af',
  headerBg:    '#1f2937',
  accent:      '#8b5cf6',
  cardBg:      '#1e293b',
  tagBg:       '#334155',
  planet:      '#6B7280',
  flare:       '#E0E7FF',
  fontSize:    16,
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    /* Two-layer background: image underneath gradient */
    background-image: ${({ theme }) => theme.backgroundImage};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    /* Text color + dynamic font size */
    color: ${({ theme }) => theme.text};
    font-size: ${({ theme }) => theme.fontSize}px;

    /* Smooth transitions */
    transition:
      background-image 0.5s ease,
      color 0.3s ease,
      font-size 0.2s ease;
  }
`;
