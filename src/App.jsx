import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import Slider from "./components/slider";
import ProductionHouse from "./components/ProductionHouse";
import GenreMovieList from "./components/GenreMovieList";

function App() {

  return (
    <>
      <Header />
      
      <Slider />

      <ProductionHouse />

      <GenreMovieList />
    </>
  )
}

export default App
