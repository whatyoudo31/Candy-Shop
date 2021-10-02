import React from "react";

const HeadMenu = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Домой
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Что-то
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Что-то
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Что-то
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Вход/Регистрация
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default HeadMenu;
