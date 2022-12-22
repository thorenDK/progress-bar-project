import React from 'react';

export default function Auth() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location = '/';
    } else {
      alert('Неправильный логин или пароль');
      window.location = '/signin';
    }
  };

  return (
    <form onSubmit={submitHandler} className="loginPage">
      <div className="form">

        <h1 className="form__title">Авторизация</h1>

        <div className="form__group">
          <input name="email" type="text" className="form__input" placeholder=" " />
          <label className="form__label">Email</label>
        </div>

        <div className="form__group">
          <input name="password" type="pass" className="form__input" placeholder=" " />
          <label className="form__label">Пароль</label>
        </div>

        <button type="submit" className="form__button">Авторизация</button>

      </div>
    </form>
  );
}
