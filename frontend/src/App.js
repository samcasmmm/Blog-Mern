import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
// import SinglePost from './components/SinglePost';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Single from './pages/Single';
import Write from './pages/Write';

const App = () => {
  const user = false;
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/setting" element={user ? <Settings /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Single /> */}
      </Router>
    </>
  );
};

export default App;
