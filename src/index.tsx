import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import content from './config/content.json';
import layout from './config/layout.json';
import settings from './config/settings.json'
import { getUserLocale } from 'get-user-locale';
import { v4 as uuidv4 } from 'uuid';
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const locale = getUserLocale()

const context = { 
  content, 
  layout, 
  settings, 
  locale: locale ? locale.slice(0,2) : settings.defaultLocale
}
const AppContext: React.Context<any> = React.createContext(context)

root.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={context}>
        <CssBaseline />
        <App />
      </AppContext.Provider>
    </ThemeProvider>
  </React.Fragment>,
);

export const useContext = () => React.useContext(AppContext);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
