import { Grid2, Rating, Stack, Container, Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'



export const MovieInfo = ({movie, IMG_POSTER}) => {



  return (

    <Box
    display={'flex'}
    flexDirection={'row'}
    flexWrap={'wrap'}
    justifyContent={'center'}
    alignItems={'center'}
    p={4}
    borderRadius={5}
    sx={{
       backgroundColor: 'rgba(0, 0, 0, 0.64)',
       color: 'white'
    }}
    >
            <Box>
                <CardMedia
                component="img"
                alt={movie.title}
                height="300"
                image={`${IMG_POSTER}${movie.poster_path}`}
                sx={{borderRadius: '15px'}}
                />
            </Box>

            <Box
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                
                >
                <Card sx={{
                    // minWidth: '30%',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    color: 'white'

                }}>
                    <CardContent sx={{width: 'auto'}}>
                        <Container>
                                <Stack spacing={3}>
                                    <Typography component='h1' variant='h4' >{movie.title}</Typography>
                                    <Rating name="read-only" value={movie.vote_average / 2} readOnly />
                                    <Typography component='p' variant='body1'>{movie.overview}</Typography>
                                </Stack>
                        </Container>
                    </CardContent>

                    <CardContent sx={{width: 'auto'}}>
                        <Container>
                                    <Stack spacing={1}>
                                        <Typography component='h2' variant='h6'>Fecha de Lanzamiento: {movie.release_date}</Typography>
                                        <Typography component='h2' variant='h6'>Lenguaje Original: {movie.original_language}</Typography>
                                        <Typography component='h2' variant='h6'>Popularidad: {movie.popularity}</Typography>
                                        <Typography component='h2' variant='h6'>Votos: {movie.vote_count}</Typography>
                                    </Stack>
                        </Container>
                    </CardContent>
                </Card>
            </Box>
    </Box>

  )
}



