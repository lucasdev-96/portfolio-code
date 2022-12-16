import './App.css';
import NavBarComponent from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <Home></Home>
    </>
  );
}

export default App;
