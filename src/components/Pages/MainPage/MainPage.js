import './style.scss';
import InfoText from '../../InfoText/InfoText';
import { navItems } from '../../Navbar/Navbar';
import ShipmentBonuses from '../../ShipmentBonuses/ShipmentBonuses';

export default function MainPage() {
  return (
    <div>
      <div className="mainPhoto">
        <img
          src="http://localhost:3001/get/image/main_image.jpg"
          alt="Barney Stinson"
        />
      </div>
      <ShipmentBonuses />
      <section className="mainPageImage">
        <img
          className="image"
          src="http://localhost:3001/get/image/main_page_suit_1.jpg"
          alt="hi"
        />
        <div className="mainPageImageCaption">
          <div className="mainPageImageText">Winter collection 50% on sale</div>
          <button className="mainPageImageButton" type="button">
            Show
          </button>
        </div>
      </section>
      <InfoText title="About Us" scrollRef={navItems[2].ref}>
        <div>
          <p>
            <b>SuitUp</b> is an online store with formal clothes for men, women
            and kids. You can shop the latest trends in fashion suits, sweaters,
            boots and more.
          </p>
          <p>
            We are online 24/7 at <u>SuitUp.com</u> and you can come and visit
            our local store and chose you dream suit with a specialist.
          </p>
        </div>
      </InfoText>
    </div>
  );
}
