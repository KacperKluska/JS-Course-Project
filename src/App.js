import Header from "./components/header/Header";
import "./App.scss";
import "./fontello/css/fontello.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import zdjecie from "./images/barney5.jpg";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div id="test">
        {/* <img src="./images/barney2.png"></img> */}
        <img src={zdjecie}></img>
      </div>
      <Footer />
    </div>
  );
}

export default App;
