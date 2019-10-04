import React from 'react';
import { ToastContainer } from 'react-toastify';
import {Routes} from './routes'

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
