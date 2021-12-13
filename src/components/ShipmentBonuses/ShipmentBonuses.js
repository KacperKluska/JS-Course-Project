import './style.scss';

function ShipmentBonuses() {
  const bonuses = [
    { message: 'Free return', name: 'box' },
    { message: 'Free shipment', name: 'shipped' },
    { message: 'Highest product quality', name: 'badge' },
    { message: 'Trusted salesman', name: 'like' },
  ];
  const source = 'http://localhost:3001/get/image/';

  return (
    <section className="shipmentBonuses">
      {bonuses.map((item) => (
        <div className="shipmentBonusesItem">
          <img src={`${source}${item.name}.png`} alt="img" />
          <span>{item.message}</span>
        </div>
      ))}
    </section>
  );
}

export default ShipmentBonuses;
