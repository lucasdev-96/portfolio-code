// import './App.css';
import NavBarComponent from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/home/Home';
import CarrouselComponent from './components/carrousel/Carrousel';
import Footer from './components/Footer/Footer';
import './service/translate/i18next';

function App() {
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <HomeComponent></HomeComponent>
      <CarrouselComponent></CarrouselComponent>
      <Footer></Footer>
    </>
  );
}

export default App;
