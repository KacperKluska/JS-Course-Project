import Header from "./components/header/Header";
import "./App.scss";
import "./fontello/css/fontello.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import zdjecie from "./images/barney5.jpg";
import Search from "./components/search/Search";
import OutsideAlerter from "./components/OutsideClick/OutsideAlerter";

function App() {
  const handleSearchClose = () => {
    const search = document.getElementById("search");
    search.classList.remove("active");
  };

  return (
    <div>
      <Header />
      <Navbar />
      <OutsideAlerter func={handleSearchClose}>
        <Search />
      </OutsideAlerter>
      <main>
        <div id="test">
          {/* <img src="./images/barney2.png"></img> */}
          <img src={zdjecie}></img>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
