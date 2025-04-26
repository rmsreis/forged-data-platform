import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Avatar, 
  Divider,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FilterListIcon from '@mui/icons-material/FilterList';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Sidebar = () => {
  // Filter options would typically come from API/state
  const filters = {
    material: 'Metal Alloys',
    property: 'Mechanical',
    process: 'Additive Mfg',
    date: 'Last 6 months',
    sharing: 'Open'
  };

  return (
    <Paper 
      elevation={1}
      sx={{ 
        p: 2, 
        borderRadius: 2, 
        backgroundColor: '#f9fafb',
        height: '100%'
      }}
    >
      <Typography variant="h6" fontWeight={600} align="center" gutterBottom>
        User Controls
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar sx={{ bgcolor: '#dbeafe', mr: 1.5 }} />
        <Typography>User Profile</Typography>
      </Box>
      
      <Box sx={{ bgcolor: '#eff6ff', p: 1, borderRadius: 1, mb: 2 }}>
        <Typography variant="body2">Access Level: Premium</Typography>
      </Box>
      
      <Chip 
        label="Credit Balance: 1250 pts" 
        sx={{ 
          bgcolor: '#f59e0b', 
          color: 'white', 
          fontWeight: 500, 
          width: '100%', 
          mb: 2 
        }} 
      />
      
      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        Data Contribution
      </Typography>
      
      <Button 
        variant="contained" 
        fullWidth 
        startIcon={<CloudUploadIcon />}
        sx={{ 
          bgcolor: '#1e40af',
          mb: 2,
          '&:hover': {
            bgcolor: '#1e3a8a',
          } 
        }}
      >
        Upload New Dataset
      </Button>
      
      <Divider sx={{ my: 2 }} />
      
      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        <FilterListIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
        Data Filters
      </Typography>
      
      {/* Filters */}
      {Object.entries(filters).map(([key, value]) => (
        <FormControl 
          key={key} 
          fullWidth 
          size="small" 
          sx={{ mb: 1.5, bgcolor: '#eff6ff', borderRadius: 1 }}
        >
          <Select
            value={value}
            displayEmpty
            inputProps={{ 'aria-label': key }}
            sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e0e0e0' } }}
          >
            <MenuItem value={value}>
              <Typography variant="body2">{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</Typography>
            </MenuItem>
          </Select>
        </FormControl>
      ))}
      
      <Button 
        variant="contained" 
        fullWidth 
        sx={{ 
          bgcolor: '#1e40af',
          mt: 1,
          mb: 3,
          '&:hover': {
            bgcolor: '#1e3a8a',
          } 
        }}
      >
        Apply Filters
      </Button>
      
      <Divider sx={{ my: 2 }} />
      
      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        <BookmarkIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
        Saved Searches
      </Typography>
      
      <Box sx={{ bgcolor: '#eff6ff', p: 1, borderRadius: 1, mb: 1.5 }}>
        <Typography variant="body2">Superalloy Creep Data</Typography>
      </Box>
      
      <Box sx={{ bgcolor: '#eff6ff', p: 1, borderRadius: 1 }}>
        <Typography variant="body2">Ti-6Al-4V AM Parameters</Typography>
      </Box>
      
      {/* Legend */}
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box sx={{ width: 15, height: 15, bgcolor: '#22c55e', borderRadius: 0.5, mr: 1 }} />
          <Typography variant="caption">Open - Available to all users</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box sx={{ width: 15, height: 15, bgcolor: '#f59e0b', borderRadius: 0.5, mr: 1 }} />
          <Typography variant="caption">Limited - Restricted access</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: 15, height: 15, bgcolor: '#ef4444', borderRadius: 0.5, mr: 1 }} />
          <Typography variant="caption">Private - Owner-only access</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Sidebar;
