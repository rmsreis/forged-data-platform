import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const navItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Data Explorer', path: '/data-explorer' },
  { name: 'AI Tools', path: '/ai-tools' },
  { name: 'Instruments', path: '/instruments' },
  { name: 'Publications', path: '/publications' },
  { name: 'Training', path: '/training' },
  { name: 'User Portal', path: '/user-portal' },
  { name: 'Help', path: '/help' },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1e40af', borderRadius: { xs: 0, sm: 1 } }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            fontSize: 24,
            fontWeight: 700,
            color: '#ffffff',
            textDecoration: 'none',
            mr: 4
          }}
        >
          FORGED
        </Typography>

        {isMobile ? (
          <MobileMenu navItems={navItems} />
        ) : (
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={RouterLink}
                to={item.path}
                sx={{ 
                  color: '#e0e7ff',
                  textTransform: 'none',
                  mx: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
