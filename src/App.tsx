import React from 'react';
import Container from '@mui/material/Container';
import { Layout } from './helper';
import { useContext } from '.';

function App() {
  const context = useContext();
  const { settings } = context

  return (
    <Container maxWidth={settings.container.maxWidth} component='main'>
      <Layout type='homepage' />
    </Container>
  );
}

export default App;
