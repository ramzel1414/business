import React, { useMemo } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import { useSelector } from 'react-redux';


const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return <div className='app'>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      app
    </ThemeProvider>
  </div>
  
}

export default App