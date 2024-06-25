import "./App.css";
import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import green from "./components/assets/green.jpg";
import Typography from "@mui/material/Typography";
import Register from "./components/Register";

import { ThemeProvider } from "@mui/material/styles";
import{theme} from "./Theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box>
      <Grid container spacing={0} >
        <Grid item md={2.5} xs={12}>
          <Box
            sx={{
              backgroundImage: `url(${green})`,
              backgroundRepeat: "repeat",
              backgroundColor: "green",
              backgroundSize: "cover",
              overflowY: 'auto',
              minHeight: {
                xs: "20vh", // Mobile 
                md: "150vh", // Desktop 
              },
              width:"100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column"}}>
              <Typography variant="h6" >
                Register Now
              </Typography>
              <Typography variant="caption"  ml={-1}>
                While seats are available !
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={9.5} xs={12} 
        // sx={{backgroundColor:"red"}}
        >
          <Register/>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  );
}

export default App;
