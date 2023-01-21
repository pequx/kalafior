import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import content from './config/content.json';
import layout from './config/layout.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const context = { content, layout, locale: 'en' }
const AppContext: React.Context<any> = React.createContext(context)

root.render(
  <ThemeProvider theme={theme}>
    <AppContext.Provider value={context}>
      <CssBaseline />
      <App />
    </AppContext.Provider>
  </ThemeProvider>,
);

export const useContext = () => React.useContext(AppContext);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
