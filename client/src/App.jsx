import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import DashboardLayout from './components/layout/DashboardLayout';


function App() {
  return (
    <>
     <React.Fragment>
      <CssBaseline />
      
      <DashboardLayout></DashboardLayout>
    </React.Fragment>
    </>
  );
}

export default App;
