import React from 'react';
import Row from './Row';
import Banner from './Banner';
import NavBar from './NavBar';
import request from './request';
import './App.css';





function App() {
  document.title = "Netflix-Clone";
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" largeRow="yes" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
