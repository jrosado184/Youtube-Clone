import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import RecommendedList from "./components/RecommendedList";
import WatchVideos from "./components/WatchVideos";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<RecommendedList />} />
        <Route path='/:id' element={<WatchVideos />} />
      </Routes>
    </div>
  );
};

export default App;
