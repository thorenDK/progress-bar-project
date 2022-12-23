import React from 'react';

export default function CreateList() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/list', {
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
      window.location = '/list';
    }
  };

  return (
    <form onSubmit={submitHandler} className="loginPage">
      <div className="form">

        <h1 className="form__title">Create List</h1>

        <div className="form__group">
          <input name="hrsname" type="text" className="form__input" placeholder=" " />
          <label className="form__label">HR's name</label>
        </div>

        <div className="form__group">
          <input name="name" type="text" className="form__input" placeholder=" " />
          <label className="form__label">Name</label>
        </div>

        <div className="form__group">
          <input name="email" type="email" className="form__input" placeholder=" " />
          <label className="form__label">Email</label>
        </div>

        <button type="submit" className="form__button">Регистрация</button>

      </div>
    </form>
  );
}
