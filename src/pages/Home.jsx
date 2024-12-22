import { Box, Button, Grid2, Typography } from '@mui/material'
import React from 'react'
import fondo from '../assets/images/fondo.webp'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (

    <Box 
    display={'flex'}
    flexDirection={'row'}
    flexWrap={'wrap'}
    justifyContent="center" 
    alignItems="center" 
    style={{ 
      height: '100vh',
      backgroundImage: `url(${fondo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <Grid2 
      item
      xs={12}
      md={6}
      backgroundColor={'rgba(0, 0, 0, 0.7)'}
      borderRadius={4}
      style={{ 
        textAlign: 'center', 
        padding: '2rem',
     }}>
        <Typography 
        variant="h2"
        sx={{
          color: 'white',
          fontWeight: 'bold'
        }} >
          Bienvenidos a mi Proyecto 5
        </Typography>

        <Typography
        variant="p"
        sx={{
          color: 'white',
        }}>
          Este es un sitio creado con React + Vite + Material-UI. con fines educativos. La API utilizada es The Movie Database (TMDb).
        </Typography>

      </Grid2>

      <Grid2 
            item
            xs={12}
            md={6}
      >

           <Button
           component= {Link}
          to='/movies'
           variant='contained'
           sx={{
             backgroundColor: 'red',
             borderRadius: '30px',
           }}>
              <Typography
              variant='p'
              sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'white',
                padding: '2rem 0.5rem',
              }}>
                Ingresar
              </Typography>
           </Button>


      </Grid2>
    </Box>
  )
}
