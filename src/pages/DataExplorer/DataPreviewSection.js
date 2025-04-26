import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Stack
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DataObjectIcon from '@mui/icons-material/DataObject';

// Mock data for the preview table
const previewData = [
  {
    compId: 'N001',
    ni: '60.5',
    cr: '9.0',
    co: '10.0',
    mo: '2.5',
    w: '6.0',
    al: '5.5',
    ti: '1.0',
    process: 'AM-LPBF',
    creepRate: '1.2E-7',
    temp: '850',
    stress: '300'
  },
  {
    compId: 'N002',
    ni: '63.2',
    cr: '8.5',
    co: '9.5',
    mo: '3.0',
    w: '5.5',
    al: '6.0',
    ti: '0.8',
    process: 'AM-LPBF',
    creepRate: '2.4E-7',
    temp: '850',
    stress: '350'
  }
];

const DataPreviewSection = ({ dataset }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Paper 
      elevation={1}
      sx={{ 
        p: 2, 
        borderRadius: 2, 
        backgroundColor: '#f9fafb',
        mb: 2
      }}
    >
      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        Dataset Preview: {dataset.name}
      </Typography>

      {/* Preview Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 1 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          aria-label="dataset preview tabs"
          sx={{
            minHeight: 30,
            '& .MuiTab-root': {
              py: 0,
              minHeight: 30,
              fontSize: '0.75rem'
            }
          }}
        >
          <Tab 
            label="Raw Data" 
            sx={{ 
              backgroundColor: tabValue === 0 ? '#1e40af' : 'transparent', 
              color: tabValue === 0 ? 'white' : 'inherit',
              borderRadius: '6px 6px 0 0',
              fontSize: 12
            }} 
          />
          <Tab label="Visualization" sx={{ fontSize: 12 }} />
          <Tab label="Metadata" sx={{ fontSize: 12 }} />
          <Tab label="ML Models" sx={{ fontSize: 12 }} />
          <Tab label="Citations" sx={{ fontSize: 12 }} />
          <Tab label="Processing" sx={{ fontSize: 12 }} />
        </Tabs>
      </Box>

      {/* Data Preview Table */}
      <TableContainer sx={{ mb: 1 }}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#dbeafe' }}>
              <TableCell>Comp_ID</TableCell>
              <TableCell>Ni (%)</TableCell>
              <TableCell>Cr (%)</TableCell>
              <TableCell>Co (%)</TableCell>
              <TableCell>Mo (%)</TableCell>
              <TableCell>W (%)</TableCell>
              <TableCell>Al (%)</TableCell>
              <TableCell>Ti (%)</TableCell>
              <TableCell>Process</TableCell>
              <TableCell>Creep Rate (1/s)</TableCell>
              <TableCell>Temp (°C)</TableCell>
              <TableCell>Stress (MPa)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {previewData.map((row, index) => (
              <TableRow
                key={row.compId}
                sx={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}
              >
                <TableCell>{row.compId}</TableCell>
                <TableCell>{row.ni}</TableCell>
                <TableCell>{row.cr}</TableCell>
                <TableCell>{row.co}</TableCell>
                <TableCell>{row.mo}</TableCell>
                <TableCell>{row.w}</TableCell>
                <TableCell>{row.al}</TableCell>
                <TableCell>{row.ti}</TableCell>
                <TableCell>{row.process}</TableCell>
                <TableCell>{row.creepRate}</TableCell>
                <TableCell>{row.temp}</TableCell>
                <TableCell>{row.stress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Action Buttons */}
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button 
          variant="contained" 
          startIcon={<DownloadIcon />} 
          size="small"
          sx={{ 
            backgroundColor: '#1e40af',
            '&:hover': {
              backgroundColor: '#1e3a8a',
            }
          }}
        >
          Download Dataset
        </Button>
        <Button 
          variant="contained" 
          startIcon={<DataObjectIcon />} 
          size="small"
          sx={{ 
            backgroundColor: '#1e40af',
            '&:hover': {
              backgroundColor: '#1e3a8a',
            }
          }}
        >
          Open in AI Analysis
        </Button>
      </Stack>
    </Paper>
  );
};

DataPreviewSection.propTypes = {
  dataset: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    material: PropTypes.string.isRequired,
    properties: PropTypes.string.isRequired,
    processing: PropTypes.string.isRequired,
    contributor: PropTypes.string.isRequired,
    access: PropTypes.string.isRequired,
  }).isRequired,
};

export default DataPreviewSection;
