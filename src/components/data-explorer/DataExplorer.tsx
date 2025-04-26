import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Chip, 
  Pagination 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Mock data for initial display
const MOCK_DATA = [
  {
    id: 1,
    name: 'High-Temp Superalloy Database',
    material: 'Ni-based',
    properties: ['Creep', 'Tensile'],
    processing: ['AM', 'HT'],
    contributor: 'D. Dunand',
    access: 'open'
  },
  {
    id: 2,
    name: 'Ti-6Al-4V Process Mapping',
    material: 'Ti-alloy',
    properties: ['Microstructure'],
    processing: ['LPBF'],
    contributor: 'T. Sun',
    access: 'limited'
  },
  {
    id: 3,
    name: 'Al Alloy Dynamic Property ML',
    material: 'Al-alloy',
    properties: ['Dynamic Hardness'],
    processing: ['Various'],
    contributor: 'C. Schuh',
    access: 'open'
  },
  {
    id: 4,
    name: 'Multi-Material Wire DED Dataset',
    material: 'Ni-Fe',
    properties: ['Mech', 'Thermal'],
    processing: ['Wire-DED'],
    contributor: 'J. Cao',
    access: 'private'
  }
];

const DataExplorer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  
  // Get access chip color based on access level
  const getAccessChipColor = (access: string) => {
    switch(access) {
      case 'open':
        return 'success';
      case 'limited':
        return 'warning';
      case 'private':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Materials Data Explorer
      </Typography>
      
      <Box sx={{ display: 'flex', mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Search datasets, properties, processing parameters..."
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ mr: 1 }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Box>
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Showing 128 datasets (321,562 data points) matching your criteria
      </Typography>
      
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead sx={{ bgcolor: 'primary.light' }}>
            <TableRow>
              <TableCell>Dataset Name</TableCell>
              <TableCell>Material System</TableCell>
              <TableCell>Properties</TableCell>
              <TableCell>Processing</TableCell>
              <TableCell>Contributor</TableCell>
              <TableCell>Access</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {MOCK_DATA.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.material}</TableCell>
                <TableCell>
                  {row.properties.map((prop) => (
                    <Chip 
                      key={prop} 
                      label={prop} 
                      size="small" 
                      sx={{ mr: 0.5, mb: 0.5 }} 
                    />
                  ))}
                </TableCell>
                <TableCell>
                  {row.processing.map((proc) => (
                    <Chip 
                      key={proc} 
                      label={proc} 
                      size="small" 
                      variant="outlined" 
                      sx={{ mr: 0.5, mb: 0.5 }} 
                    />
                  ))}
                </TableCell>
                <TableCell>{row.contributor}</TableCell>
                <TableCell>
                  <Chip 
                    label={row.access} 
                    color={getAccessChipColor(row.access) as any} 
                    size="small" 
                  />
                </TableCell>
                <TableCell align="right">
                  <Button size="small" variant="outlined" sx={{ mr: 1 }}>
                    View
                  </Button>
                  <Button size="small" variant="contained">
                    Analyze
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Pagination count={10} page={page} onChange={handlePageChange} color="primary" />
      </Box>
    </Box>
  );
};

export default DataExplorer;