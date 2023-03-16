import React , { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useGetMovieByIdQuery } from "../services/moviedbApi";
import { styled } from '@mui/system';
//components
import { Box ,CardMedia} from "@mui/material";
import Spiner from "../assets/spinner-black.gif";
import { 
  Card,
  CardActions ,
  CardContent,
  Typography,
  Button,
  Container,
} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';


const baseImg = "https://image.tmdb.org/t/p/original/";

const Watch = styled("section")({
  width:"100%",
  display:"flex",
  justifyContent:'center',
  "div":{
    width:"90%",
    margin:"0 auto",
  }
})
const SinglePage = ()=>{
    const [movieUrl  , setMovie] = useState("");
    const {id} = useParams();
    const {data} = useGetMovieByIdQuery(id);


    useEffect(()=>{
      movieTrailer(data?.original_title || data?.name).then(res=>{
          const urlParams = new URLSearchParams(new URL(res).search);
          setMovie(urlParams.get("v"));

        }).catch((e)=>{
          console.log(e);
        })
      }
   

    ,[movieUrl ,data]);
    
    const opts = {
      height: '460',
      width: '100%',
      
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },

    };
    return (
      <>
       { data && (
          <Box
            sx={{
              backgroundImage:`url(${baseImg}${data?.backdrop_path}),linear-gradient(#000, #000, #000, #000, #111)`,
              height:{
                xs:"max-content",
                md:"max-content",
              },
              minHeight:{
                xs:"550px",
              },
              backgroundSize:{
                xs:"99% 90%",
                md:"100% 100%",
              },
              backgroundAttachment:"fixed",
              marginBottom:"100px",
            }}
        >
         
              <Card
                sx={{
                    background:"transparent",
                    paddingTop:"70px",
                    width:{xs:"88%",md:"50%"},
                    marginLeft:{
                      xs:"0",
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
                     mb={4}
                     >
                     {data.original_title}
                   </Typography>
                   <Typography 
                     color="#fafafa"
                     component="p"
                     variant="p"
                     sx={{
                     fontSize:{
                      xs:"17.5px",
                      md:"19px",
                     },
                     lineHeight:"30px",
                     fontWeight:"400",
                     marginLeft:"8px",
                     letterSpacing:"1.1px",
                     marginBottom:"20px",
                    }}
                   >
                    {data.overview}
                    </Typography>
                    <CardActions>
                        <Button size="medium"
                         sx={{
                            color:"#fff",  
                            padding:"10px 20px",
                            background:"rgba(0 ,0 , 0, 0.6)",
                            fontSize:{
                              xs:"13px",
                              md:"19px",
                            },

                         }}
                         startIcon={<PlayArrowIcon/>}
                        >Watch</Button>
                        <Button size="medium"
                         sx={{
                          color:"#fff",  
                          padding:"10px 20px",
                          background:"rgba(0 ,0 , 0, 0.6)",
                          fontSize:{
                            xs:"13px",
                            md:"19px",
                          },
                         }}
                         startIcon={<AddIcon/>}
                        >ADD List</Button>
                    </CardActions>
                </CardContent>
            </Card>  
          
        </Box> ) }  

         
            <Watch>
             {
              movieUrl ?<YouTube
              opts={opts} 
              videoId={movieUrl}
             />: <img src={Spiner} />

            //  <CardMedia src={Spiner} sx={{width:'50px',height:"50px"}} />            
             }    
          </Watch> 
              
      </>      
        
    )
}


export default SinglePage;

