import React, { useState, useEffect } from "react";
import { FR, ES, GB, IT } from 'country-flag-icons/react/3x2'

import {
  Box,
  Grid2,
  CircularProgress,
  Pagination,
  Button,
} from "@mui/material";

import CardMovie from "../components/CardMovie";

const API_KEY = import.meta.env.VITE_API_KEY;

const langs = [
   { name: "Español", code: "es-MX", flag:  <ES style={{height: 20}}/> },
   { name: "Ingles", code: "en-US", flag: <GB style={{height: 20}}/> },
   { name: "Italiano", code: "it-IT", flag: <IT title="" style={{height: 20}}/> },
   { name: "Frances", code: "fr-FR",  flag: <FR title="" style={{height: 20}}/> }
 ];

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
      <Box
      backgroundColor={"black"}
      sx={{  minWidth: 120, display: "flex ", gap: 1,  p: 2  ,alignContent: "center", justifyContent: "right" }}>
        { 
          langs.map((lang) => (
            <Button variant="text" onClick={() => changeLanguage(lang.code)}> {lang.flag} </Button> // {lang.name}
          ))
        }
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
          onChange={(event, page) => {
            changePage(page);
          }}
          sx={{ backgroundColor: "white", borderRadius: "15px" }}
        />
      </Grid2>
    </>
  );
};
