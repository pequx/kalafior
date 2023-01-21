import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import content from './config/content.json'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Context: React.Context<any> = React.createContext(content)

root.render(
  <ThemeProvider theme={theme}>
    <Context.Provider value={content}>
      <CssBaseline />
      <App />
    </Context.Provider>
  </ThemeProvider>,
);

export const useContext = () => React.useContext(Context);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
