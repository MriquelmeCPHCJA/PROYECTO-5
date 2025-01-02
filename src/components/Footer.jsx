import { Box, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Box
    sx={{
      fontSize: '1rem',
      backgroundColor: '#212529',
      padding: '5px',
      textAlign: 'center',
      color: 'white',
    }}>
      <Typography variant="p" component={'p'}>
            2025 &copy; | Desarrollado por Marcelo Riquelme
      </Typography>

      <Typography variant="p" component={'p'}>

        Uso para fines Educativos
      </Typography>
    </Box>
  )
}
