import './style.scss';
import InfoText from '../../InfoText/InfoText';
import mainPhoto from '../../../images/barney5.jpg';
import headerPhoto from '../../../images/barney6.jpg';
import asidePhoto from '../../../images/barney3.jpg';
import suit1 from '../../../images/suit4.jpg';
import suit2 from '../../../images/suit2.jpg';
import suit3 from '../../../images/suit3.jpg';
import { navItems } from '../../Navbar/Navbar';

export default function MainPage() {
  return (
    <div>
      <div className="mainPhoto">
        <img src={mainPhoto} alt="Barney Stinson" />
      </div>
      <div className="imagesDiv">
        <h1 className="title">
          <b>Check out our new collection</b>
        </h1>
        <div className="gridCollage">
          <div className="photo headerImg">
            <img src={headerPhoto} alt="Suit 1" />
          </div>
          <div className="photo asideImg">
            <img src={asidePhoto} alt="Suit 1" />
          </div>
          <div className="photo normalIMG">
            <img src={suit1} alt="Suit 1" />
          </div>
          <div className="photo normalIMG">
            <img src={suit2} alt="Suit 2" />
          </div>
          <div className="photo normalIMG">
            <img src={suit3} alt="Suit 3" />
          </div>
        </div>
      </div>
      <InfoText title="Contact" scrollRef={navItems[3].ref}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          quisquam omnis fugit hic, nobis eum sit natus ipsum voluptas
          recusandae commodi molestias temporibus, non voluptatem incidunt
          dignissimos, suscipit assumenda? Ut, assumenda maxime. Temporibus est
          perferendis nemo qui accusantium eum, excepturi facilis consectetur
          totam ex fuga libero in incidunt architecto nam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque autem
          laborum nobis laudantium vitae voluptatem asperiores omnis quam
          mollitia dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
          accusamus sapiente eaque hic, laudantium consequuntur consequatur ipsa
          deserunt reprehenderit asperiores perferendis voluptatibus, doloribus
          animi cumque optio iure veniam, eveniet culpa aspernatur. Amet,
          nostrum similique ratione, atque, est adipisci aliquam enim sapiente
          quasi iure provident ea deserunt officia perspiciatis doloremque
          recusandae.
        </p>
      </InfoText>
      <InfoText title="About" scrollRef={navItems[2].ref}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo velit
          nulla eius ducimus quia suscipit minus consectetur eaque, in iusto
          sapiente unde voluptate alias libero delectus nesciunt animi minima
          totam? Obcaecati molestiae officiis vero totam quas similique aliquid
          deserunt, ipsa odio minima inventore cumque. Eligendi aliquid hic
          earum veniam dolorum doloribus sequi quidem nisi obcaecati quibusdam
          iusto quam quae aut quis assumenda, tempora animi illo iste dolorem
          aliquam? Voluptates atque iusto totam exercitationem et omnis fugit
          facere enim ipsa quia nisi harum voluptatem, accusantium blanditiis
          voluptas eum veniam amet numquam. Voluptate amet laudantium soluta.
          Assumenda, sapiente commodi maxime voluptatibus facere beatae at vero
          quae culpa provident, ea inventore omnis nemo nesciunt suscipit cum
          ipsum autem iure eos dolorum temporibus facilis! Fugit maiores aliquam
          vel explicabo non et praesentium suscipit hic eveniet repudiandae odio
          corrupti quisquam laboriosam dicta commodi voluptas beatae neque
          asperiores nam, ipsum autem corporis officia soluta? Dolore,
          inventore!
        </p>
      </InfoText>
    </div>
  );
}
