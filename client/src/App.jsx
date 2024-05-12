import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import {Home, About, Projects, Contact} from './pages';
import './App.css';

function App() {
  return (
    <main>
      <Router>
        {/* <Sidebar /> */}
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path = "/contact" element = {<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App;
