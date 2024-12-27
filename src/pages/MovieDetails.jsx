import { Grid2, Rating, Stack, Container, Box, Card, CardMedia, CardContent } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { MovieInfo } from '../components/MovieInfo'

export const MovieDetails = () => {

  const location = useLocation()
  const movie = location.state?.movie
  const IMG_POSTER = import.meta.env.VITE_API_IMG_POSTER



  return (
    <Box 
    // Minheight={'86vh'}
    minHeight={'86vh'}
    display={'flex'}
    flexDirection={'row'}
    flexWrap={'wrap'}
    justifyContent={'center'}
    alignItems={'center'}
    m={0}
    p={4}
    sx={{
         backgroundImage:`url(${IMG_POSTER}${movie.backdrop_path})`,
         backgroundSize: 'cover',
        }} >

        <MovieInfo  />

    </Box>
  )
}
