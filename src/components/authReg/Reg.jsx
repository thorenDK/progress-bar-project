import React from 'react';

export default function Reg() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location = '/';
    } else {
      alert('Данный эл. адрес уже занят');
      window.location = '/signup';
    }
  };

  return (
    <form onSubmit={submitHandler} className="loginPage">
      <div className="form">
        <h1 className="form__title">Регистрация</h1>

        <div className="form__group">
          <input
            name="name"
            type="text"
            className="form__input"
            placeholder=" "
          />
          <label className="form__label">Имя</label>
        </div>

        <div className="form__group">
          <input
            name="email"
            type="email"
            className="form__input"
            placeholder=" "
          />
          <label className="form__label">Адрес электронной почты</label>
        </div>

        <div className="form__group">
          <input
            name="password"
            type="password"
            className="form__input"
            placeholder=" "
          />
          <label className="form__label">Пароль</label>
        </div>

        <div>
          <input
            className="check mb-3"
            type="checkbox"
            id="scales"
            name="check"
            defaultChecked={false}
          />
          <label htmlFor="scales">Admin</label>
        </div>

        <button type="submit" className="form__button">
          Регистрация
        </button>
      </div>
    </form>
  );
}
