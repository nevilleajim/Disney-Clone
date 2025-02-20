import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Header from "./components/Header";

function App() {

  return (
    <>
    <Header />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/tvshows" element={<TvShows />}/>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
