import React from 'react'
import { Routes, Route } from "react-router-dom"
import routes from "./routes"
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element} exact />
        })}
      </Routes>
    </>
  )
}

export default App