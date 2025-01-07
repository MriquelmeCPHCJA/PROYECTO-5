import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const IMG_POSTER = import.meta.env.VITE_API_IMG_POSTER
const CardMovie = ({movie} ) => {


  return (
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
                          whiteSpace: 'wrap',
                          textAlign: 'center',
                          }}>
                          {movie.title}
                        </Typography>
    
                      </CardContent>  
                    </CardActionArea>
                  </Card>
  )
}

export default CardMovie