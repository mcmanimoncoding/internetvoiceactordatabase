import { Component } from 'react';
import './App.css';
import $ from 'jquery';

import MovieRow from './MovieRow'
// import SearchBox from './SearchBox'

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      searchTerm:["..."]

    }
   

    this.performSearch()

    // console.log("search Term: " + searchTerm)
  }
  

  searchChangeHandler(event){
    // console.log(e.target.value)
    // let currentTerm = []
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
    
  }
  
  performSearch(searchTerm){

    console.log('Perform Search using OMDB')
    // Switch from OMDB to TMDB for better functionality https://www.youtube.com/watch?v=bqSSLr8A8PU
    const urlString = "http://www.omdbapi.com/?apikey=d4dddf45&s=" + searchTerm
    $.ajax({
      url: urlString,
      timeout: 10000,
      
      
      success: (searchResults) => {
        console.log("Fetched Data Successfully")
        // console.log(searchResults)
        const results = searchResults.Search
        console.log(results)

        var movieRows = []

        results.forEach((movie)=>{
          console.log(movie.Title)
          const movieRow = <MovieRow movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})

      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
        // console.log(err)
      }

    })
  }



  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td >
                <img width="50" src="microphone-solid.svg" alt="IVAD Icon" />
              </td>
              <td>
                <h1>
                  InternetVoiceActorDatabase
              </h1>
              </td>
            </tr>
          </tbody>
        </table>
{/* 
        <SearchBox placeholder="Enter Search Term"
        handleChange={(e) => this.setState({searchTerm:e.target.value})}
            
        />

        // <button onClick={console.log("click"), 
        // this.performSearch()} width="50">Search</button> */}

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }}

        
        onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Search Term"
        
        
        />
    {/* <button ={this.performSearch()}>Search</button> */}

        {this.state.rows}

      </div>
    );
  }
}


export default App;