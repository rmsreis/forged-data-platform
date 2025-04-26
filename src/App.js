import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DataExplorer from './pages/DataExplorer';

// Other page components would be imported here
// import Dashboard from './pages/Dashboard';
// import AITools from './pages/AITools';
// etc...

// Create a custom theme matching the design
const theme = createTheme({
  palette: {
    primary: {
      main: '#1e40af', // The blue color from the design
    },
    secondary: {
      main: '#f59e0b', // The orange/amber color from the design
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 6,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Redirect root to data explorer as that's our main UI in the design */}
          <Route path="/" element={<Navigate to="/data-explorer" replace />} />
          <Route path="/data-explorer" element={<DataExplorer />} />
          
          {/* Add routes for other pages as they are developed */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/ai-tools" element={<AITools />} /> */}
          {/* etc... */}
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/data-explorer" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
