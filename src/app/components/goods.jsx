import React from "react";

let url =
  "https://piratmarmelad.ru/catalog/product/zhevatelniy-marmelad-chervyachki-kislie-w800-h800.jpg";

let testItem = (
  <div className="card mb-3" style={{ maxWidth: 540 }}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={url} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h4 className="card-title m-3">Мармелад</h4>
          <p className="card-text">id: 007</p>
          <p className="card-text">Стоимость: 100руб</p>
          <button type="button" className="btn btn-outline-success">
            Перейти к товару
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Goods = () => {
  return testItem;
};

export default Goods;
