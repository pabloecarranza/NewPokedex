import { Routes, Route } from "react-router-dom";

import About from './components/About/About'
import HomePage from './components/HomePage/HomePage';
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;