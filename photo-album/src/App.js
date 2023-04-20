
import { Routes, Route } from "react-router-dom"
import Home from "./pages/HomePage/HomePage"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  )
}
export default App;