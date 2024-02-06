import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import {Home, About, Projects, Contact} from './pages';
import './App.css';

/* TESTING THREE.JS SCENE 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#three-canvas'),
});

renderer.setPixelRatio(window.devicePixelRatio);
//renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(800,600);
camera.position.setZ(30);
renderer.render(scene, camera); */

function App() {
  return (
    <main className="overflow-hidden">
      <Router>
        <Sidebar />
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
