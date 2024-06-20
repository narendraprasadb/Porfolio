import React from 'react';
import './App.css';
import CardPage from './pages/CardPage';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
function App() {
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
          <CardPage/>
      </ThemeProvider>
    </div>
  );
}

export default App;
