import * as React from 'react';
//import Button from '../components/Button';
import Button from '@mui/material/Button';
//import Typography from '../components/Typography';
import Typography from '@mui/material/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from './austin.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
      All About Teamwork!
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
       Welcome to MTZDrywall, your trusted partner in commercial drywall and framing solutions! With a legacy of excellence and a commitment to quality craftsmanship, we are your go-to source for all your construction needs.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        
        
        href="/"
        sx={{ minWidth: 200 }}
      >
        Register    
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}