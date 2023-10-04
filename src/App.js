import * as React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import ProductCategories from './modules/views/ProductCategories';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import AppAppBar from './modules/views/AppAppBar';
import Contacts from './modules/views/Contacts';
import withRoot from './modules/withRoot';
import i from './locales/i18n';
import ProductSmokingHero from './modules/views/ProductSmokingHero';

function App() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);
  return (
    <I18nextProvider i18n={i}>
      <AppAppBar setLanguage={setLanguage} language={language} />
      <ProductHero />
      <ProductCategories />
      <ProductValues />
      <Contacts />
      <ProductSmokingHero />
      <AppFooter />
    </I18nextProvider>
  );
}

export default withRoot(App);
