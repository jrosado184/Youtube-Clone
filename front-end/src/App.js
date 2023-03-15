import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import SideMenu from "./components/side-menu/SideMenu";
import RecommendedList from "./components/RecommendedList";
import WatchVideos from "./components/WatchVideos";

const App = () => {
  const isAtHomepge = window.location.href.split("/")[3] === "";

  return (
    <div>
      <Header />
      {isAtHomepge && <SideMenu />}
      <div>
        {isAtHomepge && <Categories />}
        <Routes>
          <Route path='/' element={<RecommendedList />} />
          <Route path='/:id' element={<WatchVideos />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
