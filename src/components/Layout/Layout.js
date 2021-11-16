import { useRef, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import '../../fontello/css/fontello.css';
import MainPage from '../Pages/MainPage/MainPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import EmailButton from '../EmailButton/EmailButton';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

export default function Layout() {
  const [searchVisible, setSearchVisible] = useState('none');
  const searchRef = useRef();
  const scrollRef1 = useRef();
  const scrollRef2 = useRef();
  const handleSearchVisible = () => {
    setSearchVisible((prev) => {
      if (prev === 'active') {
        setTimeout(() => {
          setSearchVisible('none');
        }, 500);
        return 'disable';
      }
      return 'active';
    });
  };

  return (
    <div>
      <Header
        searchRef={searchRef}
        searchVisible={searchVisible}
        setSearchVisible={handleSearchVisible}
      />
      <Navbar ref1={scrollRef1} ref2={scrollRef2} />
      <Search
        searchRef={searchRef}
        styleClass={searchVisible}
        onClick={handleSearchVisible}
      />
      <main>
        <Switch>
          <Route path="/" exact>
            <MainPage ref1={scrollRef1} ref2={scrollRef2} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <ErrorPage errorCode="404 Page not found!">
              Try to go back.
            </ErrorPage>
          </Route>
        </Switch>
      </main>
      <EmailButton />
      <Footer />
    </div>
  );
}
