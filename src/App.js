import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
//import ProductHowItWorks from './modules/views/ProductHowItWorks';
//import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import Contacts from './modules/views/Contacts';
import withRoot from './modules/withRoot';

function App() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductCategories />
      <ProductValues />
      <Contacts />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);






//import './App.css';
//import React from 'react';
//import Carousel from 'react-material-ui-carousel'
//import { Paper, Button } from '@mui/material'


//function App(props)
//    {
//        const items = [
//            {
//                name: "Room #1",
//                description: "Probably the most random thing you have ever seen!"
//            },
//            {
//                name: "Room #2",
//                description: "Hello World!"
//            }
//        ]
    
//        return (
//            <Carousel>
//                {
//                    items.map( (item, i) => <Item key={i} item={item} /> )
//                }
//            </Carousel>
//        )
//    }
    
//    function Item(props)
//    {
//        return (
//            <Paper>
//                <h2>{props.item.name}</h2>
//                <p>{props.item.description}</p>
    
//                <Button className="CheckButton">
//                    Check it out!
//                </Button>
//            </Paper>
//        )
//    }


//export default App;
