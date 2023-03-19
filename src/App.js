import {Routes, Route} from "react-router-dom"
import NavBar from "./components/navBar"
import Home from "./routes/home"
import About from "./routes/about"
import Meetings from "./routes/meetings"
import Settings from "./routes/settings"
import NotFound from "./routes/notFound"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="body-content">
        <Routes>
          <Route path="/" element={ <Meetings /> } />
          <Route path="meetings" element={ <Meetings /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
