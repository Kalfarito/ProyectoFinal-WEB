import logo from './logo.svg';
import './App.css';
import ManUser from "./components/ManUser/ManUser";
import * as ReactDOM from 'react-dom';
import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manuser" element={<ManUser />} />
      </Routes>
    </Router>
  );
};

export default ManUser;