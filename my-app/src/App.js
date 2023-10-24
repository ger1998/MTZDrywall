
import logo from './MTZ.jpg';
import background from './MTZ.jpg';
import Container from '@mui/material/Container';
import MainFeaturedPost from './MainFeaturedPost';
import MainAppBar from './MainAppBar';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


//import Header from './Header';


import './App.css';
import ProductHero from './product';
import ProductValues from './ProductValues';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

function App() {
  return (
  <React.Fragment>

     <MainAppBar />
     <ProductHero/>    
     <ProductValues/>
    <Router>
    <Routes>
      
      {/* <div style={{ backgroundImage: `url(${background})` }}> */}
        
          {/* <div className="App">
            <Container maxWidth="lg"> */}
               {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between", minHeight: '100vh', overflowX: 'hidden', overflowY: 'auto' }}> */}
             
              
              <Route exact path="/" element={ <header className="App-header">
              </header>} />
             

            {/* </div> */}
        {/* <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        </main> */}
            {/* </Container>
          </div> */}
           </Routes>
      </Router>
  </React.Fragment>
//    <div className="App">
//       <Container maxWidth="lg">
        
//        <header className="App-header">
//          <img src={logo} className="App-mtz" alt="logo" />
//        </header>
//        <main>
//          <MainFeaturedPost post={mainFeaturedPost} />
 //       </main>
 //      </Container>
 //   </div>
 //    </div>
  );
}

export default App;
