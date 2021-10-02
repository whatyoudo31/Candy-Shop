import React from "react";
import HeadMenu from "./components/headMenu";
import SearcBar from "./components/searchBar";
import SortByPrice from "./components/sortByPrice";
import AllGoods from "./components/allGoods";
import Categories from "./components/categories";

function App() {
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <HeadMenu />
        <SearcBar />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Categories />
            </div>
            <div className="col-9">
              <SortByPrice />
              <AllGoods />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
