import './App.css';
import Marks from './components/Marks/Marks';
import NavBar from './components/NavBar/NavBar';
import Phones from './components/Phones/Phones';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Marks/>
      <Phones/>
    </div>
  );
}

export default App;
