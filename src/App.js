import './App.css';
import { BrowserRouter as Route, Routes, Route } from 'react-router-dom'

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
