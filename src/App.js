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
        {/* basename="https://hayun-jung.com" */}
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/Portfolio" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/project" element={<Project />}/>
          {/* <Route path="*" element={<Home/>}/>  */}
        </Routes>
      </div>
      
    </div>
  )
}

export default App;