import React , {useState , useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';

const Navbar = ()=>{
    const [handelShow , setHandelShow] = useState(true);
    useEffect(()=>{
       window.addEventListener("scroll",()=>{
           if(window.scrollY >100){
               setHandelShow(false);
           }else{
               setHandelShow(true);
           }
           return ()=>{
               window.removeEventListener("scroll");
           }
       }
       
       )
    },[])
    return (
        <AppBar sx={{
            background:`${handelShow ? "transparent":"#000"}`,
            boxShadow:"0",
            transition:"all 300ms ease-in-out",
        }}
        >
            <Toolbar>
            <Box
        component="img"
        sx={{
          height: "70px",
          width: "120px",
         
        }}
        alt="The house from the offer."
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
      />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;