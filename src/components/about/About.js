import React from 'react'
import { Link , Outlet, useNavigate} from 'react-router-dom'


function About() {
  let navigate = useNavigate()

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={
        () => navigate('/login', {replace: false})
      }>ثبت نام</button>
      <h3>Wellcome To About Page )):</h3>
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <Link to='setting'>setting</Link>
        <Link to='dashbord'>dashbord</Link>
      </div>
    <Outlet/>
    </div>
  )
}

export default About