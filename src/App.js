import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from "./components/NavMenu";
import Topmenu from "./components/Topmenu";
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
    <Topmenu/>
      <NavMenu/>
      <Footer/> 
    </div>
  );
}

export default App;
