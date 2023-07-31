import './App.css';
import { BrowserRouter as Route, Routes, Route } from 'react-router-dom'
import Home from './pages/homepage'
import Works from './pages/works'
import About from './pages/about'


function App() {
  return (
    <div className="App">
      {""}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
