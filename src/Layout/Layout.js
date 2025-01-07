import React,{useState,useEffect} from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Regesterdnav from './components/Regesterdnav/Regesterdnav';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import './Layout.css';
import Home from './views/Home/Home';
import Teachers from './views/Teachers/Teachers';
import Students from './views/Students/Students';
import Problems from './views/Problems/Problems';
import About from './views/About/About';
import Profile from './views/Profile/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
import TypeContext from './contexts/TypeContext';

const Layout = () => {
  const [token, setToken] = useState("");

  // unknown people
  if(!token) {
    return (
      <Router>
        <Header />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Teachers" element={<Teachers/>} />
            <Route path="/Students" element={<Students/>} />
            <Route path="/Problems" element={<Problems username={""} type={""}/>} />
            <Route path="/Login" element={<Login setToken={setToken} />} />
            <Route path="/Signup" element={<Signup setToken={setToken} />} />
            <Route path="/About" element={<About/>} />
        </Routes>
        <Footer />
      </Router>
    );
  }

  // registerd people
  return (
    <AuthContext.Provider value={token.username}>
      <TypeContext.Provider value={token.type}>
        <Router>
          <Header />
          <Regesterdnav />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Teachers" element={<Teachers/>} />
              <Route path="/Students" element={<Students/>} />
              <Route path="/Problems" element={<Problems username={""}/>} type={""} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup setToken={setToken} />} />
              <Route path="/About" element={<About/>} />
          </Routes>
          <Footer />
        </Router>
      </TypeContext.Provider>
    </AuthContext.Provider>
  );
}

export default Layout;