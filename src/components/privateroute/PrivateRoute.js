import React from 'react'
import { isLogin } from './../utils/Utils'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  let hasLogin = isLogin('mohammad');

  return (
    <>
      {
        hasLogin ? (

          <Outlet/>
        ) : (
          <Navigate to='/login' />
        )
      }
    </>
  )
}

export default PrivateRoute