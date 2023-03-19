import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/main/Header";
import RecommendedList from "./components/main/RecommendedList";
import WatchVideos from "./components/videos/WatchVideos";
import { useEffect, useState } from "react";
import SearchResults from "./components/videos/SearchResults";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = darkTheme ? "rgb(23 23 23)" : "white";
  }, [darkTheme]);

  return (
    <div className={darkTheme ? "dark" : null}>
      <Header />
      <Routes>
        <Route path='/' element={<RecommendedList />} />
        <Route path='/:id' element={<WatchVideos />} />
        <Route path='/results/:id' element={<SearchResults />} />
      </Routes>
    </div>
  );
};

export default App;
