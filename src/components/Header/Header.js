import './style.scss';
import { useState, useContext } from 'react';
import NavItem from '../NavItem/NavItem';
import OutsideAlerter from '../OutsideClick/OutsideAlerter';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import CustomLink from '../CustomLink/CustomLink';
import { UserContext } from '../../context/UserContext';
import { logoutUser } from '../../services/requests';

export default function Header({ searchRef, searchVisible, setSearchVisible }) {
  const [leftMenu, setLeftMenu] = useState('');
  const { isLogged } = useContext(UserContext);
  const [userLogged, setUserLogged] = isLogged;

  const handleLeftMenuShow = () => {
    setLeftMenu('active');
  };

  const handleLeftMenuClose = () => {
    setLeftMenu((prev) => {
      if (prev === 'active') {
        setTimeout(() => {
          setLeftMenu('');
        }, 500);
        return 'disable';
      }
      return '';
    });
  };

  const logOut = () => {
    handleLeftMenuClose();
    setUserLogged(false);
    logoutUser();
  };

  const handleSearch = () => {
    setSearchVisible();
    searchRef.current.focus();
  };

  return (
    <header id="mainHeader">
      <OutsideAlerter
        id="outsideAlert"
        func={handleLeftMenuClose}
        style={leftMenu}
      >
        <div id="leftNavDiv">
          <ul id="leftNav" className={leftMenu}>
            {!userLogged && (
              <CustomLink path="/login">
                <NavItem
                  onClick={() => {
                    handleLeftMenuClose();
                  }}
                  icon="icon-login"
                >
                  Sign in
                </NavItem>
              </CustomLink>
            )}
            {!userLogged && (
              <CustomLink path="/register">
                <NavItem
                  onClick={() => {
                    handleLeftMenuClose();
                  }}
                >
                  Register
                </NavItem>
              </CustomLink>
            )}
            {userLogged && (
              <CustomLink path="/account">
                <NavItem
                  onClick={() => {
                    handleLeftMenuClose();
                  }}
                >
                  Account
                </NavItem>
              </CustomLink>
            )}
            {userLogged && (
              <CustomLink path="/">
                <NavItem
                  onClick={() => {
                    logOut();
                  }}
                >
                  Log out
                </NavItem>
              </CustomLink>
            )}
            <NavItem
              icon={searchVisible === 'active' ? 'icon-cancel' : 'icon-search'}
              onClick={() => {
                handleSearch();
                handleLeftMenuClose();
              }}
            >
              Search
            </NavItem>
          </ul>
        </div>
      </OutsideAlerter>
      <nav id="firstNavbar">
        <HamburgerButton trigger={leftMenu} onClick={handleLeftMenuShow} />
        <CustomLink path="/">
          <h1 id="logo">SuitUp</h1>
        </CustomLink>
        <ul id="rightNav">
          <NavItem icon="icon-gift">Gift Certificate</NavItem>
          <NavItem icon="icon-basket">Cart</NavItem>
        </ul>
      </nav>
    </header>
  );
}
