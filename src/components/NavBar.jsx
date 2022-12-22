import React from 'react';

export default function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/image/logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          Высокая гора
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {user && (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/allLists">Все листки адаптации</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/myLists">Мои листки адаптации</a>
                </li>
              </>
            )}
            {user?.isAdmin && (
              <li className="nav-item">
                <a className="nav-link active" href="/">Пользователи</a>
              </li>
            )}
            {!user ? (
              <li className="nav-item">
                <a className="nav-link active" href="/signin">Авторизация</a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link active" href="/api/logout">Выход</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
