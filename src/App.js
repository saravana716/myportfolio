import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import MyProfile from './Component/MyProfile/MyProfile';
import About from './Component/About/About';
import Roters from './Router/Roters';
function App() {
  return (
    <div className="App">
    <Roters />
    </div>
  );
}

export default App;