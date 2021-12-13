import Newsletter from '../Newsletter/Newsletter';
import './style.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerColumns">
        <div className="footerColumn">
          <b>
            <h3>Help</h3>
          </b>
          <div className="footerColumnItem">Returns</div>
          <div className="footerColumnItem">Change</div>
          <div className="footerColumnItem">FAQ</div>
        </div>
        <div className="footerColumn">
          <b>
            <h3>Payment and shipment</h3>
          </b>

          <div className="footerColumnItem">Payment forms</div>
          <div className="footerColumnItem">Shipment forms</div>
        </div>
        <Newsletter />
      </div>
      <div className="socialMedias">
        <h3>Join us!</h3>
        <div>
          <a href="https://www.facebook.com/" target="_blanc">
            <i className="icon-facebook-official" />
          </a>
          <a href="https://www.youtube.com/" target="_blanc">
            <i className="icon-youtube" />
          </a>
          <a href="https://twitter.com/?lang=pl" target="_blanc">
            <i className="icon-twitter" />
          </a>
          <a href="https://www.google.com/" target="_blanc">
            <i className="icon-gplus" />
          </a>
        </div>
      </div>
      <b>Copyright &copy; Kacper Kluska 2021. JavaScript course</b>
    </footer>
  );
}
