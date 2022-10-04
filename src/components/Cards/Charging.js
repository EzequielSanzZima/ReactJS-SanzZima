import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ pt: '40vh', display: 'flex', justifyContent: 'center' }}>
      <CircularProgress size="75px" sx={{color:"red"}}/>
    </Box>
  );
}
