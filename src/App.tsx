import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';

import theme from './theme';
import Navbar from './components/common/Navbar';
import DataExplorer from './components/data-explorer/DataExplorer';

// Placeholder components for other routes
const Dashboard = () => <div>Dashboard (To be implemented)</div>;
const AITools = () => <div>AI Tools (To be implemented)</div>;
const Instruments = () => <div>Instruments (To be implemented)</div>;
const Publications = () => <div>Publications (To be implemented)</div>;
const Training = () => <div>Training (To be implemented)</div>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Container maxWidth={false} sx={{ flexGrow: 1, py: 3 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/data-explorer" element={<DataExplorer />} />
              <Route path="/ai-tools" element={<AITools />} />
              <Route path="/instruments" element={<Instruments />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/training" element={<Training />} />
            </Routes>
          </Container>
          <Box component="footer" sx={{ py: 2, bgcolor: 'background.paper', textAlign: 'center' }}>
            © {new Date().getFullYear()} FORGED Materials Innovation Platform
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
