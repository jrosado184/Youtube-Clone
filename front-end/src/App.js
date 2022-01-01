import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

const App = () => {
  return (
    <div>
      <Header />
      <div className="display: flex">
        <SideMenu />
        <Categories />
      </div>
    </div>
  );
};

export default App;
