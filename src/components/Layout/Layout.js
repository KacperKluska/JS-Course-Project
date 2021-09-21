import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import "../../fontello/css/fontello.css";
import { useRef, useState } from "react";
import MainPage from "../MainPage/MainPage";
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function Layout() {
  const [searchVisible, setSearchVisible] = useState("none");
  const searchRef = useRef();
  const handleSearchVisible = () => {
    setSearchVisible((prev) => {
      if (prev === "active") {
        setTimeout(() => {
          setSearchVisible("none");
        }, 500);
        return "disable";
      } else {
        setSearchVisible("active");
      }
    });
  };

  return (
    <div>
      <Header
        searchRef={searchRef}
        searchVisible={searchVisible}
        setSearchVisible={handleSearchVisible}
      />
      <Navbar />
      <Search
        searchRef={searchRef}
        styleClass={searchVisible}
        onClick={handleSearchVisible}
      />
      <main>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
