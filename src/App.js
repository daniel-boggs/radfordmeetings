import {Routes, Route} from "react-router-dom"
import NavBar from "./components/navBar"
import Meetings from "./routes/meetings"
import Resources from "./routes/resources"
import NotFound from "./routes/notFound"
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./components/ScrollToTop";

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
          <Route path="resources" element={ <Resources /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
        <ScrollToTop />
        </div>
        <footer id="footer">This site was built by a fellow and is not affiliated with AA or Radford Hall</footer>
      </div>
    </div>
  );
}

export default App;
