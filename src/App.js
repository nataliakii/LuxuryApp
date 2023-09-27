import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import AppAppBar from './modules/views/AppAppBar';
import Contacts from './modules/views/Contacts';
import withRoot from './modules/withRoot';
import { I18nextProvider } from "react-i18next";
import i from "./locales/i18n";
import { useTranslation } from "react-i18next";

function App ()
{
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);
  return (
    <React.Fragment>
            <I18nextProvider i18n={i}>
      <AppAppBar              setLanguage={setLanguage}
            language={language}/>
      <ProductHero />
      <ProductCategories />
      <ProductValues />
      <Contacts />
        <AppFooter />
        </I18nextProvider>
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
