import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = `https://api.themoviedb.org/3/`;
const API_KEY = "cadd11edc0b558cf3fea446486a4972d";
//  https://api.themoviedb.org/3/discover/tv?api_key=cadd11edc0b558cf3fea446486a4972d&with_network=213
export const movieApi = createApi({
    reducerPath:"movieApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getNetflixOrigins:builder.query({
            query:()=> `discover/tv?api_key=${API_KEY}&with_network=213`,
        }) ,

        getTopRated:builder.query({
            query:()=>`movie/top_rated?api_key=${API_KEY}&language=en-US`,
        }) ,

        getActionMovies:builder.query({
            query:()=>`discover/movie?api_key=${API_KEY}&with_genres=28`,
        }),

        getComedyMovies:builder.query({
            query:()=>`discover/movie?api_key=${API_KEY}&with_genres=35`,
        }),

        getHorrorMovies:builder.query({
            query:()=>`discover/movie?api_key=${API_KEY}&with_genres=27`,
        }),

        getRomenceMovies:builder.query({
            query:()=>`discover/movie?api_key=${API_KEY}&with_genres=10749`,
        }),

        getDocumenterisMovies:builder.query({
            query:()=>`discover/movie?api_key=${API_KEY}&with_genres=99`,
        }),

        getMovieById:builder.query({
            query:(id)=> `/movie/${id}?api_key=cadd11edc0b558cf3fea446486a4972d&language=en-US` 
        }) 
        
    })
}); 

export const {
    useGetNetflixOriginsQuery , 
    useGetTopRatedQuery ,
    useGetActionMoviesQuery ,
    useGetComedyMoviesQuery ,
    useGetHorrorMoviesQuery ,
    useGetRomenceMoviesQuery ,
    useGetDocumenterisMoviesQuery ,
    useGetMovieByIdQuery,
} = movieApi;

