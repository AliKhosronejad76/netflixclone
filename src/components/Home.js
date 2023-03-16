import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";
import { Container } from "@mui/material";
import {
    useGetNetflixOriginsQuery , 
    useGetTopRatedQuery ,
    useGetActionMoviesQuery ,
    useGetComedyMoviesQuery ,
    useGetHorrorMoviesQuery ,
    useGetRomenceMoviesQuery ,
    useGetDocumenterisMoviesQuery ,
} from "../services/moviedbApi";



const Home = ()=>{
    return (
        <>
            <Banner api={useGetNetflixOriginsQuery()}/>
            <Container>
               <Row api={useGetTopRatedQuery()} title={"TopRated Movies"}/>
               <Row api={useGetActionMoviesQuery()} title={"Action Movies"}/>
               <Row api={useGetNetflixOriginsQuery()} title={"NetFlix Orginals"}/>
               <Row api={useGetComedyMoviesQuery()} title={"Comedy Movies"}/>
               <Row api={useGetHorrorMoviesQuery()} title={"Horror Movies"}/>
               <Row api={useGetRomenceMoviesQuery()} title={"Romance Movies"}/>
               <Row api={useGetDocumenterisMoviesQuery()} title={"Documenteris Movies"}/>   
            </Container>
        </>
    )
}

export default Home;
