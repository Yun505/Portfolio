import Navbar from "./NavBar"
import Blog from "./Blog"
import Project from "./Project"
import Home from "./Home";

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
       <div className="container">
        <Routes basename="https://hayun-jung.com">
          <Route path="/" element={<Home/>} />
          <Route path="/Portfolio" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/project" element={<Project />}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App;