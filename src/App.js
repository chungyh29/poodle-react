// import logo from './logo.svg';
// import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/global';
import { theme } from './assets/styles/theme';
import { Navbar, Carousel } from './components';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hook';
import { SlideData } from './components/Carousel/SlideData';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
        <Navbar open={open} setOpen={setOpen} node={node}/>
      <Carousel slides={SlideData}/>
      
    </>
  </ThemeProvider>
  );
}

export default App;
