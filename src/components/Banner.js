import React from "react";
import { Box } from "@mui/material";
import {Card , CardContent , Typography , CardActions ,Button} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import Navbar from "./Navbar";




const baseImg = "https://image.tmdb.org/t/p/original/";
const Banner = ({api})=>{ 
    const {data} = api;
    const bannerData = data?.results[Math.floor((Math.random()*10)+1)] || true;
    console.log(bannerData);
    
    return (
        <>
         <Navbar/>
        
         <Box
            sx={{
                backgroundImage:`url(${baseImg}${bannerData?.backdrop_path}), linear-gradient(#000, #000, #000, #000, #111)`,
                minHeight:'470px',
                maxHeight:"max-content",
                backgroundSize:{xs:"100% 100%"},
                display:'flex',
                alignItems:"start",
                justifyContent:"start",
                paddingBottom:"30px",
                 
            }}
        >
            <Card
                sx={{
                    background:"transparent",
                    width:{xs:"100%",md:"50%"},
                    marginTop:"70px",
                    marginLeft:{
                        xs:"0px",
                        md:"50px",
                    },
                    boxShadow:"none",
                    zIndex:55,
                }}
            >
                <CardContent>
                   <Typography 
                     color="#fafafa" 
                     variant="h4" 
                     component="h1"
                     sx={{
                        fontSize:{
                            xs:"20px",
                            md:"30px",    
                        },
                        paddingBottom:"16px",
                     }}
                     >
                     {bannerData.original_title}
                   </Typography>
                   <Typography 
                     color="#fafafa"
                     component="p"
                     variant="p"
                     sx={{
                     fontSize:{
                        xs:"16px",
                        md:"18px",
                     },
                     lineHeight:"30px",
                     fontWeight:"400",
                     marginLeft:"8px",
                     letterSpacing:"1.4px",
                    }}
                   >
                   {
                    bannerData.overview
                   }
                    </Typography>
                    <CardActions sx={{marginTop:"30px"}}>
                        <Button size="medium"
                         sx={{
                            color:"#fff",  
                            padding:"10px 20px",
                            background:"rgba(0 ,0 , 0, 0.6)",
                            fontSize:"17px",

                         }}
                         startIcon={<PlayArrowIcon/>}
                        >Watch</Button>
                        <Button size="medium"
                         sx={{
                            color:"#fff",    
                            padding:"10px  20px",
                            background:"rgba(0 ,0 , 0, 0.6)",
                            fontSize:"17px",
                         }}
                         startIcon={<AddIcon/>}
                        >ADD List</Button>
                    </CardActions>
                </CardContent>
            </Card>

        </Box>
        </>
     
    )
}

export default Banner;