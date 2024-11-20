import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { dark } from '@mui/material/styles/createPalette';

const darkTheme = createTheme({
  palette:{
    mode:'dark',
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
