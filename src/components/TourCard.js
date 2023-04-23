import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import one from './assets/one.jpeg';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import * as React from 'react';


function TourCard ({tour}){
      
    return(
        <>
        <Grid item xs={3}>

        
        <Paper elevation={7}> 
        
        <img 
        src={tour.image}
        alt='price img'
        className='img'
        />
        <Box padding={3}>
<Typography variant='subtitle1' component='h2'>
        {tour.name}
        </Typography>
        
        <Box sx={{display: 'flex',
            alignItems: 'center'}}>
<AccessTimeIcon sx={{width: 16.5}} />
<Typography variant='body2' component='p'>
{tour.position} Position
</Typography>
                </Box>

                <Box sx={{display: 'flex',
            alignItems: 'center'}}>
<Rating  name="read-only"/>
                </Box>
                </Box>

        
        </Paper>
         
        </Grid>
        </>
    )
}

export default TourCard