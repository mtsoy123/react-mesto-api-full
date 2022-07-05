import logo from '../images/logo.svg';
import {Link, Route, useHistory} from 'react-router-dom';
import React from 'react'

function Header({loggedIn, userData, onSignOut}) {

  const history = useHistory()

  function signOut() {
    localStorage.removeItem('token');
    onSignOut(false);
    history.push('/signin');
  }

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Логотип Место" className="header__logo"/>
        {loggedIn ?
          <div className="header__userinfo">
            <p className="header__title">{userData}</p>
            <a className="header__link" onClick={signOut}>Выйти</a>
          </div>
          :
          <>
            <Route path="/signin">
              <Link to="/signup" className="header__link">Зарегистрироваться</Link>
            </Route>
            <Route path="/signup">
              <Link to="/signin" className="header__link">Войти</Link>
            </Route>
          </>
        }
      </div>
    </header>
  )
}

export default Header