import { Box, FormControl, FormLabel } from '@mui/material';
import React, { useState } from 'react';
import BasicModal from '../components/ModalContact';
 import { useLocation } from 'react-router-dom';


export const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });

      const { name, email, message } = useLocation().state || {};

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
        
      };


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

        <h2>Contáctanos</h2>
        <FormControl>
          <FormLabel htmlFor="name">
            Nombre Completo
          </FormLabel>
          <input type="text" id='name' name="name" value={formData.name} onChange={handleChange} required/>

          <FormLabel htmlFor="email"> 
            Email
          </FormLabel>
          <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} required/>

          <FormLabel htmlFor='message'>
            Mensaje
          </FormLabel>
          <textarea type="text" id='message' name='message' value={formData.message} onChange={handleChange}/>

          <BasicModal 
          open={isModalOpen} 
          onClose={handleCloseModal} 
          name={formData.name}
          email={formData.email}
          message={formData.message}
          />

        </FormControl>
        
      </Box>

    </Box>
  );
};