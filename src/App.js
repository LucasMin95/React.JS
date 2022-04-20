import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import DaisyNavBar from './components/DaisyNavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <DaisyNavBar></DaisyNavBar>
      <ItemListContainer></ItemListContainer>
      <div>
        <h1 className="text-3xl font-bold font-mono">Bienvenidos</h1>
      </div>
    </div>
  );
}

export default App;
