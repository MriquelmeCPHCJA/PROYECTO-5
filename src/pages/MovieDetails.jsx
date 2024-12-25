import { Grid2, Rating, Stack } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

export const MovieDetails = () => {

  const location = useLocation()
  const movie = location.state?.movie
  const IMG_POSTER = import.meta.env.VITE_API_IMG_POSTER



  return (
    <Grid2 
    container
    spacing={4}
    justifyContent={'center'}
    alignItems={'center'}
    backgroundImage={`url(${IMG_POSTER}${movie.backdrop_path})`}
    sx={{
      height: '86vh',
      backgroundImage:`url(${IMG_POSTER}${movie.backdrop_path})`,
      BackgroundPosition: 'right',
      backgroundSize: 'cover',
      p: 4,
      }}
    >
      <Grid2
      item
      xs={12} 
      md={6}
      lg={2} 
      backgroundColor={'rgba(0, 0, 0, 0.6)'}
      borderRadius={'15px'}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        color: 'white',
      }}>

        <div style={{marginRight: '20px'}}>
          <img 
            src={`${IMG_POSTER}${movie.poster_path}`}
            alt={movie.title}
            style={{width: '200px', height: '300px', borderRadius: '15px'}}
          />  
        </div>
        <div>
          
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p>
          <Stack direction="row" spacing={2}>
            <Rating name="read-only" value={movie.vote_average / 2} readOnly max={10} />

          </Stack>
           <p>{movie.vote_average}</p> 

          
        </div>

      </Grid2>

    </Grid2>
  )
}
