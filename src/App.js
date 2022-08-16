import React, { Component } from 'react'
import Navbar from './components/Navbar'
// import Newsitem from './components/Newsitem'
import Newss from './components/Newss'

export default class App extends Component {
  render() {
    return (
      
        <div>
          <Navbar/>
          <Newss/>
        </div>
      
    )
  }
}
