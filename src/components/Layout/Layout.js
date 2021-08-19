import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import InfoText from "../InfoText/InfoText";
import MainPhoto from "../../images/barney5.jpg";
import Photo1 from "../../images/barney4.jpg";
import Suit1 from "../../images/suit1.jpg";
import Suit2 from "../../images/suit2.jpg";
import Suit3 from "../../images/suit3.jpg";
import "../../fontello/css/fontello.css";
import { useState } from "react";
import MainPage from "../MainPage/MainPage";

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
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}
