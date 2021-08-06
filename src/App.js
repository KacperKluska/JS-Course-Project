import Header from "./components/header/Header";
import "./App.scss";
import "./fontello/css/fontello.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import zdjecie from "./images/barney5.jpg";
import Search from "./components/search/Search";
import OutsideAlerter from "./components/OutsideClick/OutsideAlerter";
import InfoText from "./components/InfoText/InfoText";

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
        <InfoText
          title={"About"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere saepe veniam iusto a deleniti quam nesciunt dolorum nihil deserunt, tempore consequatur inventore possimus eum neque quo! Consectetur facere quis quibusdam eum possimus provident sequi similique vitae. Perferendis autem aut hic vel officia ut. Vitae neque exercitationem asperiores distinctio laboriosam, officiis illo tempora optio omnis unde nobis perspiciatis rerum reprehenderit nostrum quod magni repellat porro qui numquam, praesentium, necessitatibus perferendis debitis recusandae. Facilis quas, reiciendis tenetur iste repellendus quia reprehenderit numquam nisi at nesciunt sequi! Minus, dicta officiis similique perspiciatis unde sapiente sed commodi quis voluptas veritatis tempore qui temporibus."
          }
        />
        <InfoText
          title={"Contact"}
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quisquam omnis fugit hic, nobis eum sit natus ipsum voluptas recusandae commodi molestias temporibus, non voluptatem incidunt dignissimos, suscipit assumenda? Ut, assumenda maxime. Temporibus est perferendis nemo qui accusantium eum, excepturi facilis consectetur totam ex fuga libero in incidunt architecto nam."
          }
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
