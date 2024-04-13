import './App.css';
import Header from './components/header/Header';
import { Routes ,Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import Maincourse from './components/maincourse/Maincourse';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/course/:courseID' element={<Maincourse/>} />

      </Routes>
    </div>
  );
}

export default App;
