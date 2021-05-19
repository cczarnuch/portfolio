import './App.scss';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import HomePage from './pages/homepage';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/skills" exact>
              <Skills />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
