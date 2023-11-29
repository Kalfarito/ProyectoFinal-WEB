import logo from './logo.svg';
import './App.css';
import ManUser from "./components/ManUser/ManUser";
import * as ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  return ( 
    <div> 
      <Router> 
        <Switch> 
          <Route path="/" exact component={ManUser} /> 
        </Switch> 
      </Router> 
    </div> 
  ); 
};
 
export default ManUser;