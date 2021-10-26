import Newsletter from '../Newsletter/Newsletter';
import './style.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerCollumns">
        <div className="footerCollumn">
          <b>
            <h3>Help</h3>
          </b>
          <div>Returns</div>
          <div>Change</div>
          <div>FAQ</div>
        </div>
        <div className="footerCollumn">
          <b>
            <h3>Payment and shipment</h3>
          </b>

          <div>Payment forms</div>
          <div>Shipment forms</div>
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
      <b>Copyrigth &copy; Kacper Kluska 2021. JavaScript course</b>
    </footer>
  );
}
