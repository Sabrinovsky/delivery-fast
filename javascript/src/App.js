import React from 'react';
import { ToastContainer } from 'react-toastify';
import {Routes} from './routes'
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  render() {
      return (
        <React.Fragment>
          <ToastContainer/>
          <Routes />
        </React.Fragment>
      )
    }
}

export default  App
