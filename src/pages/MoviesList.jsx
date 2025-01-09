import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid2,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Card,
  CardActionArea,
  Pagination,
  Button,
} from "@mui/material";

import CardMovie from "../components/CardMovie";

const API_KEY = import.meta.env.VITE_API_KEY;
// const IMG_POSTER = import.meta.env.VITE_API_IMG_POSTER

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState('es-MX');
  const [totalPages, setTotalPages] = useState(50);

  const changePage = (page) => {
    setPage(page);
  };

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  // changeLanguage('en-US');

  const fetchMovies = () => {
    setLoading(true);


    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}&language=${language}`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.log("error de Fetch: ", error);
      })
      .finally(() => setLoading(false));
  };

  // console.log('movies: ', movies)

  useEffect(() => {
    if (language) {
      fetchMovies();
    }
  }, [page, language]);
  

  if (loading) {
    return (
      <Grid2
        container
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"black"}
        sx={{ height: "86vh" }}
      >
        <CircularProgress color="warning" size={"10rem"} />
      </Grid2>
    );
  }

  return (
    <>
      <Box sx={{ minWidth: 120, display: "flex ", p: 2  ,alignContent: "center", justifyContent: "center" }}>
        <Button variant="contained" onClick={() => changeLanguage('es-MX')}>Español</Button>
        <Button variant="contained" onClick={() => changeLanguage('en-US')}>Ingles</Button>
        <Button variant="contained" onClick={() => changeLanguage('it-IT')}>Italiano</Button>
        <Button variant="contained" onClick={() => changeLanguage('fr-FR')}>Frances</Button>
        <Button variant="contained" onClick={() => changeLanguage('de-DE')}>Aleman</Button>
      </Box>

      <Grid2
        container
        spacing={4}
        sx={{
          padding: "20px",
          backgroundColor: "black",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >


        {movies.map((movie) => (
          <Grid2 item xs={12} md={6} lg={4} key={movie.id}>
            <CardMovie movie={movie} />
          </Grid2>
        ))}
      </Grid2>

      <Grid2
        container
        spacing={4}
        sx={{
          padding: "20px",
          backgroundColor: "black",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pagination
          color="primary"
          count={totalPages}
          page={page}
          // este bloque es para activar las 47557 páginas
          // onChange={(event, newPage) => {
          //   changePage(newPage);
          // }}
          onChange={(event, page) => {
            changePage(page);
          }}
          sx={{ backgroundColor: "white", borderRadius: "15px" }}
        />
        {/* {changeLanguage('en-US')} */}
      </Grid2>
    </>
  );
};
