import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import sketch from './sketch.png';
import construction from './construction-worker.png';
import work from './work-in-progress.png'

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'text.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={sketch}
                alt="sketch"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                expectations
              </Typography>
              <Typography variant="h5">
                {
                  'We can provide exactly what the GC is expecting as well as fill the void in the market for a sophisticated framing & drywall contractor by delivering on schedule and providing quality control.'}
              
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={work}
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Our Mission
              </Typography>
              <Typography variant="h5">
                {
            
                  'It is our commitment to keep customers satisfied with Trust, Experience, and Efficiency. '
                }

                
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src= {construction}
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Safety in mind.
              </Typography>
              <Typography variant="h5">
                {'We prioritize worker safety at all times in the workplace. Develope a concise safety protocol that addresses potential hazard, promotes safe practices, and encourages proactive reporting of safety concerns.'}
                {'that you will not find anywhere else.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues; 

