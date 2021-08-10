import Header from "./components/Header/Header";
import "./App.scss";
import "./fontello/css/fontello.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import OutsideAlerter from "./components/OutsideClick/OutsideAlerter";
import InfoText from "./components/InfoText/InfoText";
import MainPhoto from "./images/barney5.jpg";
import Photo1 from "./images/barney4.jpg";
import Suit1 from "./images/suit1.jpg";
import Suit2 from "./images/suit2.jpg";
import Suit3 from "./images/suit3.jpg";

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
          <img src={MainPhoto}></img>
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
          <img src={Photo1}></img>
        </div>
        <div id="flexPhotos">
          <img src={Suit1}></img>
          <img src={Suit2}></img>
          <img src={Suit3}></img>
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
