import React from "react";
import Home from "./components/Home";
import SinglePage from "./components/SinglePage";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import Navbar from "./components/Navbar";
import {Container} from "@mui/material";
import {Route ,Routes} from "react-router-dom";

const App = ()=>{
  return (
    <>
        <ThemeProvider theme={theme}>
          <Navbar/>
           <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/:id" element={<SinglePage/>}/>
            </Routes>
      </ThemeProvider>
    </>
  )
}

export default App;

