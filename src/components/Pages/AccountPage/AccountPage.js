import React from 'react';
import './style.scss';
import SectionLogo from '../../SectionLogo/SectionLogo';
import { getUserData, refreshToken } from '../../../services/requests';

const AccountPage = () => {
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');

  const getData = async () => {
    try {
      const { data, status } = await getUserData();
      if (status === 200) {
        setName(data.name);
        setSurname(data.surname);
        setEmail(data.email);
      } else {
        setName('Server error');
        setSurname('Server error');
        setEmail('Server error');
      }
    } catch (err) {
      setName('Server error');
      setSurname('Server error');
      setEmail('Server error');
    }
  };

  React.useEffect(() => {
    refreshToken();
    getData();
  }, []);

  return (
    <article className="emptyScreen">
      <SectionLogo>Account</SectionLogo>
      <div className="flexHorizontal">
        <section className="personalData">
          <header className="sectionTitle">
            <h2>Account settings</h2>
          </header>
          <label htmlFor="name" className="accountInput">
            Name:
            <input type="text" id="name" value={name} readOnly />
          </label>
          <label htmlFor="surname" className="accountInput">
            Surname:
            <input type="text" id="surname" value={surname} readOnly />
          </label>
          <label htmlFor="email" className="accountInput">
            Email:
            <input type="text" id="email" value={email} readOnly />
          </label>
        </section>
        <section className="shipmentData">
          <header className="sectionTitle">
            <h2>Shipment details</h2>
          </header>
          <label htmlFor="country" className="accountInput">
            Country:
            <input type="text" id="country" value={name} readOnly />
          </label>
          <label htmlFor="city" className="accountInput">
            City:
            <input type="text" id="city" value={surname} readOnly />
          </label>
          <label htmlFor="street" className="accountInput">
            Street:
            <input type="text" id="street" value={email} readOnly />
          </label>
          <label htmlFor="house_number" className="accountInput">
            House number:
            <input type="text" id="house_number" value={surname} readOnly />
          </label>
          <label htmlFor="phone_number" className="accountInput">
            Phone number:
            <input type="text" id="phone_number" value={email} readOnly />
          </label>
        </section>
      </div>
    </article>
  );
};

export default AccountPage;
