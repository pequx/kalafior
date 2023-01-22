import React from 'react';
import Container from '@mui/material/Container';
import { Layout } from './helper';
import { useContext } from '.';
import {Helmet} from "react-helmet";

function App(): JSX.Element {
  const context = useContext();
  const { settings, locale } = context
  const { meta } = settings

  return (
    <React.Fragment>
      <Helmet>
        <html lang={locale} />
        <title>{meta.title[locale]}</title>
        <meta name='viewport' content={meta.viewport} />
        <meta name='description' content={meta.description[locale]} />
        <meta name='author' content={meta.author[locale]} />
        <meta name='generator' content={meta.generator[locale]} />
        <meta name='copyright' content={meta.copyright[locale]} />
        <meta name='robots' content={meta.robots} />
        <meta name='rating' content={meta.rating} />
        <meta name='twitter:card' content={meta['twitter:card'][locale]} />
        <meta name='twitter:site' content={meta['twitter:site'][locale]} />
        <meta name='twitter:creator' content={meta['twitter:creator'][locale]} />
        <meta property='og:url' content={meta['og:url'][locale]} />
        <meta property='og:title' content={meta['og:title'][locale]} />
        <meta property='og:description' content={meta['og:description'][locale]} />
        <meta property='og:image' content={meta['og:image'][locale]} />
        <meta property='og:locale' content={locale} />
        <meta property='og:type' content='website' />
        <meta charSet={settings.meta.charset} />
      </Helmet>
      <Container maxWidth={settings.container.maxWidth} component='main'>
        <Layout type='homepage' />
      </Container>
    </React.Fragment>
  );
}

export default App;
