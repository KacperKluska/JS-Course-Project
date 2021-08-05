import Header from "./components/header/Header";
import "./App.scss";
import "./fontello/css/fontello.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div id="test"></div>
      <Footer />
    </div>
  );
}

export default App;
