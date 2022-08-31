import React, {useEffect, useState} from 'react';

function Login({handleLogin}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function onLogin(e) {
    e.preventDefault();
    handleLogin(email, password)
  }

  return (
    <>
      <div className="login login__container">
        <h2 className="login__title">Вход</h2>
        <form noValidate name="login" onSubmit={onLogin}>
          <label htmlFor="login__email-input" className="login__label">
            <input id="login__email-input" type="text" name="email" placeholder="Email"
                   className="login__input login__input_type_email" minLength="2" maxLength="30" required
                   onChange={handleEmailChange} value={email}/>
            <span className="pop-up__place-input-error pop-up__error-message"></span>
          </label>
          <label htmlFor="login__password-input" className="login__label">
            <input id="login__password-input" type="password" name="add-link" placeholder="Пароль"
                   className="login__input login__input_type_link" required onChange={handlePasswordChange}
                   value={password}/>
            <span className="pop-up__link-input-error pop-up__error-message"></span>
          </label>
          <button type="submit" aria-label="Войти" className="login__button">Войти</button>
        </form>
      </div>
    </>
  );
}

export default Login;
