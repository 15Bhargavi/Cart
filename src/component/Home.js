// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

// //import React from 'react';
// import Navbar from './Navbar';
// import img from './img';
// import {Grid,Avatar,Paper} from '@mui/material'
// //import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// const Home=()=> {
//   return (
//     <div>
//       <Grid>
//         <Paper>
//     <Navbar/>
//     </Paper>
//     </Grid>
//     <ImageList sx={{ width:1300, height: 1300 }}cols={5} gap={5}>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             src={`${item.img}?w=248&fit=crop&auto=format`}
//             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.title}
//             subtitle={<span>by: {item.author}</span>}
//             position="below"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//     </div>
//   )
// }
// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     author: '@bkristastucchio',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     author: '@rollelflex_graphy726',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     author: '@helloimnik',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     author: '@nolanissac',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     author: '@hjrc33',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//   },
// ];
// export default Home;
//import {Grid,Paper} from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import img from './img'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
//simport { Button } from '@mui/material';
export default function Home() {
  return (
  <>
      <div>
       <Navbar/>
       </div>
          <ImageList sx={{ width: 1500, height:800 }} cols={4} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.price}
                loading="lazy"
              />
              <ImageListItemBar
                price={item.price}
                subtitle={<span>by: {item.author}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
        </>
      );
    }
    
    const itemData = [
      {
        img: 'img1.jpg',
        price: 'Breakfast',
        author: '@bkristastucchio',
       
      },
      {
        img: 'img2.jpg',
        price: 'Burger',
        author: '@rollelflex_graphy726',
      },
      
      {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        price: 'Camera',
        author: '@helloimnik',
      },
      {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        price: 'Coffee',
        author: '@nolanissac',
      },
      {
        img: 'img1.jpg',
        price: 'Hats',
        author: '@hjrc33',
      },
      {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        price: 'Honey',
        author: '@arwinneil',
      },
      {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        price: 'Basketball',
        author: '@tjdragotta',
      },
      {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        price: 'Fern',
        author: '@katie_wasserman',
      },
     
    ];      
   