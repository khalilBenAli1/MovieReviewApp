import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Cards from "../Card/Cards";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Grids(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <Grid container spacing={3}>
      {
        props.data.map((e)=>
          
          <Grid item key={e._id} xs={12} sm={6} md={4} lg={3}>
            <Cards ele={e} />
        </Grid >
        )
        
      }
      </Grid>
    </Box>
  );
}

export default Grids;
