import React from 'react';
import Container from '@mui/material/Container';
import { Component } from './helper';

function App() {
  return (
    <Container maxWidth="lg">
      <Component type='Appbar' items={['appbar-1']} />
      <Component type='Hero' items={['hero-1']} />
      <Component type='Teaser' items={['teaser-1', 'teaser-2', 'teaser-3']} />
      <Component type='Hero' items={['hero-2']} />
      <Component type='Feature' items={['feature-1', 'feature-2', 'feature-3']} />
      <Component type='Hero' items={['hero-3']} />
      <Component type='Teaser' items={['teaser-4', 'teaser-5', 'teaser-6', 'teaser-7']} />
      <Component type='Hero' items={['hero-4', 'hero-5', 'hero-6', 'hero-7', 'hero-8']} />
      <Component type='Feature' items={['feature-4', 'feature-5', 'feature-6']} />
      <Component type='Hero' items={['hero-9']} />
      <Component type='Logos' items={['logos-1']} />
      <Component type='Hero' items={['hero-10']} />
      <Component type='Logos' items={['logos-2']} />   
      <Component type='Hero' items={['hero-1']} />
      <Component type='People' items={['people-1']} />
      <Component type='Hero' items={['hero-12']} />
      <Component type='Posts' items={['posts-1']} />
      <Component type='Footer' items={['footer-1']} />
    </Container>
  );
}

export default App;
