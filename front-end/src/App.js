import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Recommended from "./components/Recommended";

const App = () => {
  return (
    <div>
      <Header />
      <div className="display: flex">
        <SideMenu />
        <div className="w-[90%]">
          <Categories />
          <Recommended />
        </div>
      </div>
    </div>
  );
};

export default App;
