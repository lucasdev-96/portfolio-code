// import './App.css';
import NavBarComponent from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/home/Home';
import CarrouselComponent from './components/carrousel/Carrousel';
import Footer from './components/Footer/Footer';
import './service/translate/i18next';
import { ResumeContextProvider } from './Context/ResumeContext';

const isCertificate = {
  value: (value: boolean) => value
};

function App() {
  return (
    <>
      <ResumeContextProvider>
        <NavBarComponent></NavBarComponent>
        <HomeComponent></HomeComponent>
        <CarrouselComponent value={isCertificate.value(false)}></CarrouselComponent>
        <CarrouselComponent value={isCertificate.value(true)}></CarrouselComponent>
        <Footer></Footer>
      </ResumeContextProvider>
    </>
  );
}

export default App;
