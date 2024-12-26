import { Box, Button, Grid2, Typography } from '@mui/material'
import React from 'react'
import Img_404 from '../assets/images/404.webp'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      backgroundColor='black'
      color={'white'}
      height='80vh'>
        <Grid2 container direction='column' justifyContent='center' alignItems='center'>
            <Typography 
                variant='h2' 
                align='center'
                color='error'
                component='h4'
                sx={{
                    fontWeight: 'bold',
                    fontSize: '8rem'
                }}
                >
                
                404
            </Typography>

            
            <Typography variant='h4' align='center'>
                Oops...
            </Typography>
            <Typography variant='body1' align='center'>
                La página que estas buscando
            </Typography>
            <Typography variant='body1' align='center'>
                no existe.
            </Typography>

            <Button variant='contained' color='warning' href='/' sx={{marginTop: '1rem'}}>
               <Link to='/' style={{textDecoration: 'none', color: 'white'}}>Volver al Inicio</Link>
            </Button>

            <Grid2 item>
                <img src={Img_404} alt='Error' width='400'  />
            </Grid2>

        </Grid2>       
    </Box>
  )
}
