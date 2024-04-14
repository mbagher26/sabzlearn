import Home from './components/home/Home';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import Maincourse from './components/maincourse/Maincourse';


let routes = [

          { path: '/home', element: <Home /> },
          { path: '/courses', element: <Courses /> },
          { path: '/course/:courseID', element: <Maincourse /> },
          {
                    path: '/about/*', element: < About />, children: [

                              { path: 'setting', element: <h1>Setting</h1> },
                              { path: 'dashbord', element: <h1>Dashbord</h1> }

                    ]
          }



]

export default routes