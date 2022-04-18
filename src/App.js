import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import DaisyNavBar from './components/DaisyNavBar';

function App() {
  return (
    <div className="App">
      <DaisyNavBar></DaisyNavBar>
      <div> 
        <h1 className="text-3xl font-bold font-mono">Hola Mundo!</h1>
      </div>
    </div>
  );
}

export default App;
