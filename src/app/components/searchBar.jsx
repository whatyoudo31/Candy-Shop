import React from "react";

const SearcBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <form className="container-fluid">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            Поиск
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Ищу что-то вкусное..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </form>
    </nav>
  );
};

export default SearcBar;
