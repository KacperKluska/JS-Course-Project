import Header from "./components/Header/Header";
import "./App.scss";
import "./fontello/css/fontello.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import InfoText from "./components/InfoText/InfoText";
import MainPhoto from "./images/barney5.jpg";
import Photo1 from "./images/barney4.jpg";
import Suit1 from "./images/suit1.jpg";
import Suit2 from "./images/suit2.jpg";
import Suit3 from "./images/suit3.jpg";
import { useState } from "react";

function App() {
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
      <Search class={searchVisible} />
      <main>
        <div id="test">
          <img src={MainPhoto} alt="Barney Stinson"></img>
        </div>
        <InfoText title="About">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          facere saepe veniam iusto a deleniti quam nesciunt dolorum nihil
          deserunt, tempore consequatur inventore possimus eum neque quo!
          Consectetur facere quis quibusdam eum possimus provident sequi
          similique vitae. Perferendis autem aut hic vel officia ut. Vitae neque
          exercitationem asperiores distinctio laboriosam, officiis illo tempora
          optio omnis unde nobis perspiciatis rerum reprehenderit nostrum quod
          magni repellat porro qui numquam, praesentium, necessitatibus
          perferendis debitis recusandae. Facilis quas, reiciendis tenetur iste
          repellendus quia reprehenderit numquam nisi at nesciunt sequi! Minus,
          dicta officiis similique perspiciatis unde sapiente sed commodi quis
          voluptas veritatis tempore qui temporibus.
        </InfoText>
        <div id="test">
          <img src={Photo1} alt="Barney Stinson 2"></img>
        </div>
        <div id="flexPhotos">
          <div className="photo">
            <img src={Suit1} alt="Suit 1"></img>
          </div>
          <div className="photo">
            <img src={Suit2} alt="Suit 2"></img>
          </div>
          <div className="photo">
            <img src={Suit3} alt="Suit 3"></img>
          </div>
        </div>
        <InfoText title="Contact">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          quisquam omnis fugit hic, nobis eum sit natus ipsum voluptas
          recusandae commodi molestias temporibus, non voluptatem incidunt
          dignissimos, suscipit assumenda? Ut, assumenda maxime. Temporibus est
          perferendis nemo qui accusantium eum, excepturi facilis consectetur
          totam ex fuga libero in incidunt architecto nam.
        </InfoText>
      </main>
      <Footer />
    </div>
  );
}

export default App;
