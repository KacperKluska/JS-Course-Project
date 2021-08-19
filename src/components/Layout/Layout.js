import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import "../../fontello/css/fontello.css";
import { useState } from "react";
import MainPage from "../MainPage/MainPage";
import { Switch, Route } from "react-router-dom";

export default function Layout() {
  const [searchVisible, setSearchVisible] = useState("none");

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
        searchVisible={searchVisible}
        setSearchVisible={handleSearchVisible}
      />
      <Navbar />
      <Search class={searchVisible} func={handleSearchVisible} />
      <main>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/login">{/* <MainPage /> */}</Route>
          <Route path="/register">{/* <MainPage /> */}</Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
