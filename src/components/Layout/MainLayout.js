import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
import { Box, Container, Grid } from '@mui/material';

/**
 * Main layout component that structures the entire application
 * Includes the header, sidebar, and main content area
 */
const MainLayout = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 3, mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9} lg={10}>
            <Box 
              sx={{ 
                backgroundColor: '#ffffff', 
                borderRadius: 2,
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                p: 2,
                minHeight: 'calc(100vh - 180px)'
              }}
            >
              {children}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;
