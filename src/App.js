import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import AppAppBar from './modules/views/AppAppBar';
import Contacts from './modules/views/Contacts';
import withRoot from './modules/withRoot';
import { I18nextProvider } from 'react-i18next';
import i from './locales/i18n';
import { useTranslation } from 'react-i18next';
import ProductSmokingHero from './modules/views/ProductSmokingHero';

function App() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);
  return (
    <React.Fragment>
      <I18nextProvider i18n={i}>
        <AppAppBar setLanguage={setLanguage} language={language} />
        <ProductHero />
        <ProductCategories />
        <ProductValues />
        <Contacts />
        <ProductSmokingHero />
        <AppFooter />
      </I18nextProvider>
    </React.Fragment>
  );
}

export default withRoot(App);
