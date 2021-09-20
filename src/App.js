import React from "react";

import Rotas from './main/rotas'
import NavBar from './components/navbar'
import 'toastr/build/toastr.min.js'

import 'toastr/build/toastr.css'
import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'
class App extends React.Component {


  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <Rotas />
        </div>
      </>
    )
  }
}

export default App
