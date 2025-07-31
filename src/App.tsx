import React from 'react';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import MainSection from "./components/mainSection";
import ServiceCards from "./components/serviceCards";
import WhyChoseUs from "./components/whyChoseUs";
import OurApproach from "./components/ourApproach";
import GlobalStyles from './assets/styles/global.styles';
import OurStack from './components/ourStack';
import Roadmap from './components/roadmap';
import TelegramButton from './components/TelegramButton';
import Discuss from './components/discuss';
import { LocaleProvider } from './LocaleContext';



function App() {
  return (
    <LocaleProvider>
      <div className="App">
        <GlobalStyles />
        <Header />
        <main>
          <MainSection />
         
          <ServiceCards />
          <WhyChoseUs />
          <OurApproach />
          <OurStack />
          <Discuss />
          <Roadmap />
         
          <TelegramButton />  
        
          
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}

export default App;
