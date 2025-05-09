import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { Accessibility, ZoomIn, ZoomOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useThemeControls } from '../ThemeProvider';

const Panel = styled.div`
  position: fixed;
  top: 1rem;           /* anchor to 1rem from top */
  right: 1rem;         /* anchor to 1rem from right */
  background: ${({ theme }) => theme.cardBg};
  border: 0.3px solid ${({ theme }) => theme.textLight};
  border-radius: 0.50rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const Handle = styled.div`
  padding: 0.5rem;
  cursor: grab;
  background: ${({ theme }) => theme.cardBg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  &:hover {
    background: ${({ theme }) => theme.tagBg};
  }
`;

export default function FloatingPanel() {
  const { increaseFont, decreaseFont } = useThemeControls();
  const [open, setOpen] = useState(false);

  const [savedY, setSavedY] = useState(() => {
    return parseInt(localStorage.getItem('panelYOffset') || '0', 10);
  });

  const panelRef = useRef(null);

  function handleStop(_, data) {
    localStorage.setItem('panelYOffset', data.y);
    setSavedY(data.y);
  }

  return (
    <Draggable
      nodeRef={panelRef}
      handle=".handle"
      axis="y"
      defaultPosition={{ x: 0, y: savedY }}
      onStop={handleStop}
    >
      <Panel ref={panelRef}>
        <Handle className="handle" title="Drag me up/down">
          <Accessibility
            size={20}
            style={{ cursor: 'pointer' }}
            onClick={() => setOpen(o => !o)}
          />
        </Handle>

        {open && (
          <>
            <Item
              aria-label="Increase text size"
              onClick={increaseFont}
              title="Increase text"
            >
              <ZoomIn size={18} />
            </Item>
            <Item
              aria-label="Decrease text size"
              onClick={decreaseFont}
              title="Decrease text"
            >
              <ZoomOut size={18} />
            </Item>
            <Item as="div" title="Toggle theme" style={{ cursor: 'default' }}>
              <ThemeToggle />
            </Item>
          </>
        )}
      </Panel>
    </Draggable>
  );
}
