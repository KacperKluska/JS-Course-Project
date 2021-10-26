import React from 'react';
import './style.scss';

const Newsletter = () => {
  const [email, setEmail] = React.useState('');

  const sendEmail = (event) => {
    event.preventDefault();
    alert(`Sent email to ${email}`);
    setEmail('');
  };

  return (
    <div className="newsletter">
      <b>
        <h3>Sign in for our Newsletter</h3>
      </b>
      <div style={{ textAlign: 'start' }}>
        Sign in if you want to be informed about sales and new collections.
      </div>
      <form className="newsletterForm" onSubmit={sendEmail}>
        <input
          className="newsletterInput"
          type="email"
          placeholder="Your email..."
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit" className="newsletterButton">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
