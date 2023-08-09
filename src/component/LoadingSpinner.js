import React, { Component } from 'react'
import loading from './loading.gif'

export class LoadingSpinner extends Component {
  render() {
    return (

      <div className="container " >
        <div className='text-center'>
          <img src={loading} alt="loading" style={{
            height: "2rem",
            width: "2rem",
            marginBottom: "1rem"
          }} /></div>
          </div>
    )
  }
}

export default LoadingSpinner