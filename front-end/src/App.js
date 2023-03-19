import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import RecommendedList from "./components/RecommendedList";
import WatchVideos from "./components/WatchVideos";
import { useEffect, useState } from "react";

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
      </Routes>
    </div>
  );
};

export default App;
