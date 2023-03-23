import {Routes, Route} from "react-router-dom"
import NavBar from "./components/navBar"
import Home from "./routes/home"
import About from "./routes/about"
import Meetings from "./routes/meetings"
import Settings from "./routes/settings"
import NotFound from "./routes/notFound"
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero-image">
      </div>
      <NavBar />
      <div id="page-container" className="body-content">
      <div id="content-wrap">
        <Routes>
          <Route path="/" element={ <Meetings /> } />
          <Route path="meetings" element={ <Meetings /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
        </div>
        <footer id="footer">This site was built by a fellow and is not affiliated with AA or Radford Hall</footer>
      </div>
    </div>
  );
}

export default App;
