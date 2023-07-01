import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.js";

import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    color: "red",
    fontSize: "50px",
    textTransform: "uppercase",
  };
  return <h1 style={style}>Warteg Mang Udin</h1>;
}

function Menu() {
  const foods = [];
  // const foods = data;
  const numFoods = foods.length;
  return (
    <main className="menu">
      <h2>Menu Kita</h2>
      {numFoods > 0 ? (
        <ul className="foods">
          {data.map((food) => (
            <Food foodObj={food} key={food.nama} />
          ))}
        </ul>
      ) : (
        <p>Kosong, gan. Besok dateng lagi.</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 20;
  const jamTutup = 22;
  const isOpen = hour >= jamBuka && hour <= jamTutup;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            {new Date().getFullYear()} Warung Mang Udin | jam buka {jamBuka} -
            jam tutup {jamTutup}
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          Maaf gan masih tutup. Coba dateng lagi sekitar jam {jamBuka}-
          {jamTutup}.
        </p>
      )}
    </footer>
  );
}

function Food(props) {
  return (
    <li className="food">
      <img
        src={props.foodObj.foto}
        alt={props.foodObj.nama}
        width="100"
        height="70"
      />
      <div>
        <h3>{props.foodObj.nama}</h3>
        <p>{props.foodObj.deskripsi}</p>
        <span>{props.foodObj.harga}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
