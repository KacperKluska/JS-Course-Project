import Newsletter from "../Newsletter/Newsletter";
import "./style.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerCollumns">
        <div className="footerCollumn">
          <b>Help</b>
          <label>Returns</label>
          <label>Change</label>
          <label>FAQ</label>
        </div>
        <div className="footerCollumn">
          <b>Payment and shipment</b>
          <label>Payment forms</label>
          <label>Shipment forms</label>
        </div>
        <Newsletter />
      </div>
      <b>Copyrigth &copy; Kacper Kluska 2021. JavaScript course</b>
    </footer>
  );
}
