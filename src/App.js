import './App.css';
import Header from './components/header/Header';
import { Routes ,Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Courses from './components/courses/Courses';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>} />
      </Routes>
    </div>
  );
}

export default App;
