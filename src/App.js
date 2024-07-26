import logo from "./logo.svg";
import "./App.css";
import Nav from "./Component/Nav";
import Banner from "./Component/Banner";
import Row from "./Component/Row";
import requests from "./Request";

function App() {
  return (
    <div>
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}
      />
     
    </div>
  );
}

export default App;
