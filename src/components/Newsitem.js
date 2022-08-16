import React, { Component } from 'react'

export class Newsitem extends Component {

  
 
  render() {
    let {title,description,urlImage,url} = this.props;

    return (
      <>
      
      <div className="card" >
        <img src={!urlImage? "https://www.teslarati.com/wp-content/uploads/2022/07/tesla-giga-shanghai-body-shop.jpg" : urlImage} className="card-img-top" alt=".."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href= {url} className="btn btn-dark">Read More</a>
          </div>
        </div>
      
    </>
    )
  }
}

export default Newsitem