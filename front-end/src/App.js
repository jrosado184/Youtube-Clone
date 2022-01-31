import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import SideMenu from "./components/side-menu/SideMenu";
import RecommendedList from "./components/RecommendedList";

const App = () => {
  return (
    <div>
      <Header />
      <SideMenu />
      <Categories />
      <RecommendedList />
    </div>
  );
};

export default App;
