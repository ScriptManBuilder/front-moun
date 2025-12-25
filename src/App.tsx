import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import CalculatorPrice from './components/calculatorPrice';
import { LocaleProvider } from './LocaleContext';
import FAQ from './components/faq';
import CustomCursor from './components/customCursor';
import { AlertProvider } from './contexts/AlertContext';
import AlertManager from './components/AlertManager';
import PrivacyPolicy from './components/PrivacyPolicy';
import CareerForm from './components/CareerForm';



function App() {
  return (
    <LocaleProvider>
      <AlertProvider>
        <Router>
          <div className="App">
            <GlobalStyles />
            <CustomCursor />
            <AlertManager />
            <Header />
            <Routes>
              <Route path="/" element={
                <main>
                  <MainSection />
                  <CalculatorPrice />
                  <ServiceCards />
                  <WhyChoseUs />
                  <OurApproach />
                  <OurStack />
                  <Discuss />
                  <Roadmap />
                  <FAQ />
                  <TelegramButton />  
                </main>
              } />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/career" element={<CareerForm />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </LocaleProvider>
  );
}

export default App;
