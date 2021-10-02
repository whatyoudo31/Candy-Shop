import React from "react";
let style = { verticalAlign: "inherit" };

const Categories = () => {
  return (
    <>
      <h3>Категории</h3>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Мармелад
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Шоколад
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Печенье
          </a>
        </li>
      </ul>
    </>
  );
};

export default Categories;
