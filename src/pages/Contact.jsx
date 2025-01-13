import { Box, FormControl, FormLabel } from '@mui/material';
import React, { useState } from 'react';
import BasicModal from '../components/ModalContact';

export const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      p={2}
      height={'78vh'}
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={'black'}>
      <Box
        component="form"
        bgcolor={'white'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '50%',
          margin: 'auto',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}>

        <h1>Contáctanos</h1>
        <FormControl>
          <FormLabel>Nombre Completo</FormLabel>
          <input type="text" id='name'/>

          <FormLabel>Email</FormLabel>
          <input type="email" id='email'/>

          <FormLabel>Mensaje</FormLabel>
          <textarea />

          <BasicModal open={isModalOpen} onClose={handleCloseModal} />

        </FormControl>
        
      </Box>

    </Box>
  );
};