import logo from './logo.svg';
import './App.css';
import ManUser from "./components/ManUser/ManUser";
import * as ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  return ( 
    <div> 
      <Router> 
        <Route path="/" exact component={ManUser} /> 
        </Router> 
    </div> 
  ); 
};
 
export default ManUser;