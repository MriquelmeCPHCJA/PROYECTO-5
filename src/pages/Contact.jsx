import { Box, Button, FormControl, FormLabel } from '@mui/material';
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
          <input type="text" />

          <FormLabel>Email</FormLabel>
          <input type="email" />

          <FormLabel>Mensaje</FormLabel>
          <textarea />

          <BasicModal open={isModalOpen} onClose={handleCloseModal} />

          {/* <Button >Enviar</Button> */}
        </FormControl>
      </Box>

      {/* Modal */}

    </Box>
  );
};





// import { Box, Button, FormControl, FormLabel } from '@mui/material'
// import React from 'react'
// import { Form } from 'react-router-dom'
// import  BasicModal  from '../components/ModalContact'

// export const Contact = () => {
//   return (
//     <Box
//     p={2}
//     height={'78vh'}
//     display="flex"
//     justifyContent="center"
//     alignItems="center"
//     bgcolor={'black'}>
//     <Box
//       component="form"
//       bgcolor={'white'}
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2,
//         width: '50%',
//         margin: 'auto',
//         padding: '1rem',
//         border: '1px solid #ccc',
//         borderRadius: '5px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//       }} >

//       <h1>Contáctanos</h1>
//       <FormControl>
//         <FormLabel>Nombre Completo</FormLabel>
//         <input type="text" />

//         <FormLabel>Email</FormLabel>
//         <input type="email" />

//         <FormLabel>Mensaje</FormLabel>
//         <textarea />

//         <Button type="submit" onClick={{BasicModal}}>Enviar</Button>




//       </FormControl>
//     </Box>
//     </Box>
//   )
// }
