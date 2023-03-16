import React from "react";
import {Link} from "react-router-dom";
import Stack from '@mui/material/Stack';
import { Typography ,Box ,Divider} from "@mui/material";
import styled from "@emotion/styled";


const baseImg = "https://image.tmdb.org/t/p/original/";

const Movie = styled("img")({
    width:'170px',
    height:'240px',
    padding:"3px",
    borderRadius:"3px",
    cursor:"pointer",
    borderRadius:"17px",
    objectFit:"cover",
    transition:"all 200ms ease-in-out",
    Zindex:56,
    position:"relative",
    ":hover":{
        transform: 'scale(1.05)',
        
       
    }
    
});


const Row = ({title ,api})=>{
     const {data , isFetching } = api;
     
     return (
        <Box 
          sx={{
            width:'100%' , 
            display:"flex",
            flexDirection:"column",
            padding:"30px 0px",
            margin:"20px 0"
          }}
        >
            <Stack direction="row" justifyContent={"space-between"} alignItems="center">
                <Typography 
                component={"h2"}
                variant="h4" 
                color="#fff"
                sx={{
                  letterSpacing:"5px",
                  width:'100%',
                  fontWeight:"500",
                  fontSize:{
                    xs:"22px",
                    md:"27px",
                    lg:"35px",
                  }
                }}
                >
                   {title}
                </Typography>
               
            </Stack>
           
            <Stack 
              direction="row"
              spacing={2} 
              sx={{
                overflowX:"scroll",
                marginTop:"20px",
                height:"auto",
                padding:"20px 0",

              }}>
               )
                {
                  data?.results?.map((movie)=>(
                      <Link to={`/${movie.id}`}>
                         <Movie src={baseImg+movie.poster_path}></Movie>
                      </Link>
                  ))
                }
             
            </Stack>
        </Box>

    );
}

export default Row;