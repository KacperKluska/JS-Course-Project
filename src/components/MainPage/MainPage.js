import "./style.scss";
import InfoText from "../InfoText/InfoText";
import MainPhoto from "../../images/barney5.jpg";
import Photo1 from "../../images/barney4.jpg";
import Suit1 from "../../images/suit1.jpg";
import Suit2 from "../../images/suit2.jpg";
import Suit3 from "../../images/suit3.jpg";

export default function MainPage() {
  return (
    <div>
      <div id="test">
        <img src={MainPhoto} alt="Barney Stinson"></img>
      </div>
      <InfoText title="About">
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illum
          maxime quae qui suscipit, labore recusandae! Aperiam, iste quae
          consectetur, iusto repudiandae, adipisci asperiores odit libero amet
          sunt inventore minus? Deleniti repudiandae, odit commodi ea dolor iure
          fuga vitae nostrum accusamus qui doloremque molestias, totam veritatis
          aperiam nobis placeat soluta!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim,
          sapiente illo dignissimos soluta suscipit corporis natus nemo
          repellat, quam inventore sequi! Assumenda aliquam cum cupiditate ipsum
          blanditiis reprehenderit consectetur. Illo voluptatibus pariatur
          dolores aliquam explicabo, odio soluta. Blanditiis illo animi numquam
          non aperiam quas quasi excepturi atque laudantium impedit.
        </p>
      </InfoText>
      <div id="test">
        <img src={Photo1} alt="Barney Stinson 2"></img>
      </div>
      <div className="imagesDiv">
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
      </div>
      <InfoText title="Contact">
        <p>
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
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
    </div>
  );
}
