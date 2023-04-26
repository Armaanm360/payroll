import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { Dashboard } from '@mui/icons-material';


const NewComp = () => {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}
      >
        <div className="armaan" sx={{ flexGrow: 1 }}>
          <Dashboard></Dashboard>
        </div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Box>
    </div>
  );
};

export default NewComp;
