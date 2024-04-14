import React from 'react'
import { Link , Outlet} from 'react-router-dom'

function About() {
  return (
    <div style={{textAlign:'center'}}>
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