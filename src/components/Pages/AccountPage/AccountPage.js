import React from 'react';
import './style.scss';
import SectionLogo from '../../SectionLogo/SectionLogo';
import { refreshToken } from '../../../services/requests';
import {
  defaultUserData,
  defaultUserShipmentData,
  getData,
  getShipmentData,
  getUserInputsData,
  getUserShipmentInputsData,
} from './logic';

const AccountPage = () => {
  const [userData, setUserData] = React.useState({
    ...defaultUserData,
  });

  const [userShipmentData, setUserShipmentData] = React.useState({
    ...defaultUserShipmentData,
  });

  const userInputsData = getUserInputsData(userData);
  const userShipmentInputsData = getUserShipmentInputsData(userShipmentData);

  React.useEffect(async () => {
    await refreshToken();
    await getData(setUserData);
    await getShipmentData(setUserShipmentData);
  }, []);

  return (
    <article className="emptyScreen">
      <SectionLogo>Account</SectionLogo>
      <div className="flexHorizontal">
        <section className="personalData">
          <header className="sectionTitle">
            <h2>Account settings</h2>
          </header>
          {userInputsData.map((item) => (
            <label key={item.id} htmlFor={item.id} className="accountInput">
              <input
                type="text"
                id={item.id}
                value={item.value ? item.value : 'loading...'}
                readOnly
              />
            </label>
          ))}
        </section>
        <section className="shipmentData">
          <header className="sectionTitle">
            <h2>Shipment details</h2>
          </header>
          {userShipmentInputsData.map((item) => (
            <label key={item.id} htmlFor={item.id} className="accountInput">
              <input
                type="text"
                id={item.id}
                value={item.value ? item.value : 'loading...'}
                readOnly
              />
            </label>
          ))}
        </section>
      </div>
    </article>
  );
};

export default AccountPage;
