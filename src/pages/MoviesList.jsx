
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { 
  Grid2,
  CardContent, 
  CardMedia, 
  Typography, 
  CircularProgress, 
  Card, 
  CardActionArea, 
  Pagination 
} from '@mui/material'

const API_KEY = import.meta.env.VITE_API_KEY
const IMG_POSTER = import.meta.env.VITE_API_IMG_POSTER


export const MoviesList = () => {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(50)

  const changePage = (page) => {
    setPage(page)
  }

  const fetchMovies = () => {

    setLoading(true)

    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}&language=es-MX`
    
    fetch(API_URL)
    .then(response => response.json())
    .then(data => { setMovies(data.results)})
    .catch(error => { console.log('error de Fetch: ', error)})
    .finally(() => setLoading(false))
  }

  useEffect(() => { fetchMovies() }, [page])

  if (loading) {

    return (
      <Grid2
      container
      justifyContent={'center'}
      alignItems={'center'}
      sx={{height: '86vh'}}
      >
        <CircularProgress />
      </Grid2>
    )

  }

  return (
    <>
        <Grid2 container spacing={4} sx={{
          padding: '20px', 
          backgroundColor: 'black', 
          color: 'white',
          alignItems: "center",
          justifyContent: "center"}}>
          {
          movies.map(movie => (
            <Grid2 item xs={12} md={6} lg={4} key={movie.id}>
              <Card sx={{backgroundColor: "black"}}>
                <CardActionArea
                  component={Link}
                  to={`/movie/${movie.title}`}
                  state={{movie}}
                >
                  <CardMedia
                    component="img"
                    height="320"
                    image={`${IMG_POSTER}/${movie.poster_path}`}
                    alt={movie.title}
                    sx={{objectFit: 'contain',  borderRadius: '15px'}}
                  />

                   <CardContent sx={{backgroundColor: 'black'}}>
                    <Typography 
                    gutterBottom 
                    variant="p"
                    component={'p'} 
                    sx={{
                      color: 'white',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      textAlign: 'center',
                      }}>
                      {movie.title}
                    </Typography>

                  </CardContent>  
                </CardActionArea>
              </Card>
            </Grid2>
          ))
          }

        </Grid2 >
        <Grid2 container spacing={4} sx={{
          padding: '20px', 
          backgroundColor: 'black', 
          color: 'white',
          alignItems: "center",
          justifyContent: "center"}}>

              <Pagination
                      color='primary'
                      count={totalPages}
                      page={page}
                      // este bloque es para activar las 47557 páginas
                      // onChange={(event, newPage) => {
                      //   changePage(newPage);
                      // }}
                      onChange={(event, page) => {
                        changePage(page);
                      }}
                      sx={{backgroundColor: 'white', borderRadius: '15px'}}
              />
          </Grid2>
    </>

  )










  // return (
  //   <Grid2 
  //   container
  //   sx={
  //     {
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       height: '86vh',
  //       backgroundColor: '#000'
  //     }
  //   }
  //   >
  //     <Grid2 item>
  //       <h1 style={{color: '#fff'}}>MoviesList</h1>
  //     </Grid2>
  //   </Grid2>
  // )
}
