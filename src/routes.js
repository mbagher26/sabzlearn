import Home from './components/home/Home';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import Maincourse from './components/maincourse/Maincourse';
import Login from './components/login/Login';
import Panel from './components/panel/Panel';
import Dashbord from './components/dashbord/Dashbord';
import PrivateRoute from './components/privateroute/PrivateRoute';


let routes = [

          { path: '/home', element: <Home /> },
          { path: '/courses', element: <Courses /> },
          { path: '/course/:courseID', element: <Maincourse /> },
          {
                    path: '/about/*', element: < About />, children: [

                              { path: 'setting', element: <h1>Setting</h1> },
                              { path: 'dashbord', element: <h1>Dashbord</h1> }

                    ]
          },
          { path: '/login', element: <Login /> },
          {
                    path: '/*', element: <PrivateRoute />, children: [
          
                              { path: 'panel', element: <Panel /> },
                              { path: 'dashbord', element: <Dashbord />}
                    ]
          }
]

export default routes