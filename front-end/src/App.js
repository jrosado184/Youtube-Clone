import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import RecommendedList from "./components/RecommendedList";

const App = () => {
  return (
    <div>
      <Header />
      <div className="">
        <SideMenu />
        <div className="w-[100%] flex-1">
          <Categories />
          <div>
            <RecommendedList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
