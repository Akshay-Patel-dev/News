import React, { Component } from 'react'
import Newsitem from '../components/Newsitem'


export class Newss extends Component {
  articles = [];
  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading : false,
      page : 1
    }
  }
  

   async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2c345294e7234cfdbb0caa8738c1a28f&pagesize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState ({articles: parsedData.articles})
  }
  handleNextClick = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2c345294e7234cfdbb0caa8738c1a28f&page=${this.state.page + 1}&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState ({
      page : this.state.page + 1,
       articles: parsedData.articles

      }
    )
  }
  handlePreviousClick = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2c345294e7234cfdbb0caa8738c1a28f&page=${this.state.page - 1}&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState ({
      page : this.state.page - 1,
       articles: parsedData.articles

      }
    )
  }
  render() {
    // let {title,description,imageUrl} = this.props;
    return (
      <div className = "container my-3 ">
        <h1 style = {{marginBottom:"2rem" } } >NewsMonkey - Top headlines</h1>
        <div className="row mx-3 text-center">
        { this.state.articles.map((element) => {
           return (<div className="col-md-4" key={element.url}>
            <Newsitem title = {element.title} description = {element.description}
            urlImage = {element.urlToImage} url = {element.url} />
        </div>)

        })
        }
        </div>
          <div className="container my-3 d-flex justify-content-between">
          <button  disabled = {this.state.page <= 1}type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
          <button  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
    </div>
    )
  }
}

export default Newss

