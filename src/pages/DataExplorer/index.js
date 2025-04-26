import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  Chip,
  Pagination,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DataPreviewSection from './DataPreviewSection';
import MainLayout from '../../components/Layout/MainLayout';

// Mock data - would come from API in production
const mockDatasets = [
  {
    id: 1,
    name: 'High-Temp Superalloy Database',
    material: 'Ni-based',
    properties: 'Creep, Tensile',
    processing: 'AM, HT',
    contributor: 'D. Dunand',
    access: 'open'
  },
  {
    id: 2,
    name: 'Ti-6Al-4V Process Mapping',
    material: 'Ti-alloy',
    properties: 'Microstructure',
    processing: 'LPBF',
    contributor: 'T. Sun',
    access: 'limited'
  },
  {
    id: 3,
    name: 'Al Alloy Dynamic Property ML',
    material: 'Al-alloy',
    properties: 'Dynamic Hardness',
    processing: 'Various',
    contributor: 'C. Schuh',
    access: 'open'
  },
  {
    id: 4,
    name: 'Multi-Material Wire DED Dataset',
    material: 'Ni-Fe',
    properties: 'Mech, Thermal',
    processing: 'Wire-DED',
    contributor: 'J. Cao',
    access: 'private'
  }
];

const DataExplorer = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedDataset, setSelectedDataset] = useState(mockDatasets[0]);
  const [page, setPage] = useState(2); // Matches the design showing page 2 selected

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleDatasetSelect = (dataset) => {
    setSelectedDataset(dataset);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Access level badge styling
  const getAccessBadgeProps = (access) => {
    const props = {
      size: "small",
      sx: { borderRadius: '10px', fontWeight: 500 }
    };
    
    switch(access) {
      case 'open':
        return { ...props, label: "Open", color: "success" };
      case 'limited':
        return { ...props, label: "Limited", color: "warning" };
      case 'private':
        return { ...props, label: "Private", color: "error" };
      default:
        return { ...props, label: "Unknown", color: "default" };
    }
  };

  return (
    <MainLayout>
      {/* Tabs for Content Type */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={selectedTab} onChange={handleTabChange} aria-label="content tabs">
          <Tab label="Data Explorer" sx={{ backgroundColor: selectedTab === 0 ? '#1e40af' : 'transparent', color: selectedTab === 0 ? 'white' : 'inherit', borderRadius: '8px 8px 0 0' }} />
          <Tab label="AI Analytics" />
          <Tab label="Visualization" />
          <Tab label="Data Integration" />
          <Tab label="Collaboration" />
        </Tabs>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Materials Data Explorer
      </Typography>

      {/* Search Bar */}
      <Box sx={{ display: 'flex', mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Search datasets, properties, processing parameters..."
          variant="outlined"
          size="medium"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ bgcolor: '#f9fafb', mr: 1 }}
        />
        <Button 
          variant="contained" 
          sx={{ 
            bgcolor: '#1e40af', 
            '&:hover': { bgcolor: '#1e3a8a' }, 
            minWidth: 90 
          }}
        >
          Search
        </Button>
      </Box>

      {/* Results Information */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Showing 128 datasets (321,562 data points) matching your criteria
      </Typography>

      {/* Results Table */}
      <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#dbeafe' }}>
              <TableCell>Dataset Name</TableCell>
              <TableCell>Material System</TableCell>
              <TableCell>Properties</TableCell>
              <TableCell>Processing</TableCell>
              <TableCell>Contributor</TableCell>
              <TableCell>Access</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockDatasets.map((dataset, index) => (
              <TableRow 
                key={dataset.id}
                onClick={() => handleDatasetSelect(dataset)}
                sx={{ 
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb',
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: '#eff6ff' }
                }}
              >
                <TableCell>{dataset.name}</TableCell>
                <TableCell>{dataset.material}</TableCell>
                <TableCell>{dataset.properties}</TableCell>
                <TableCell>{dataset.processing}</TableCell>
                <TableCell>{dataset.contributor}</TableCell>
                <TableCell>
                  <Chip {...getAccessBadgeProps(dataset.access)} />
                </TableCell>
                <TableCell>
                  <Button size="small" sx={{ minWidth: 'auto' }}>View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Pagination 
          count={5} 
          page={page} 
          onChange={handlePageChange} 
          variant="outlined" 
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-root': {
              borderRadius: 1,
              height: 40,
              minWidth: 40,
            },
            '& .Mui-selected': {
              backgroundColor: '#1e40af',
              color: 'white',
              '&:hover': {
                backgroundColor: '#1e3a8a',
              }
            }
          }}
        />
      </Box>

      {/* Dataset Preview Section */}
      <DataPreviewSection dataset={selectedDataset} />
    </MainLayout>
  );
};

export default DataExplorer;
