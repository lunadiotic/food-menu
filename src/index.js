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
  return (
    <main className="menu">
      <h2>Menu Kita</h2>
      <ul className="foods">
        {data.map((food) => (
          <Food foodObj={food} key={food.nama} />
        ))}
      </ul>
      {/* <Food
        nama="Nasi Goreng"
        deskripsi="Nasi yang digoreng dengan bumbu rempah khas Indonesia"
        harga={25000}
        foto="food/nasi-goreng.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Sate Ayam"
        deskripsi="Sate ayam yang ditusuk dan dibakar, disajikan dengan bumbu kacang"
        harga={15000}
        foto="food/sate-ayam.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      /> */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 12;
  const jamTutup = 22;

  if (hour < jamBuka || hour > jamTutup) {
    alert("Warteg Mang Udin Tutup");
  } else {
    alert("Warteg Mang Udin Buka");
  }

  return (
    <footer className="footer">
      {new Date().getFullYear()} Warung Mang Udin | jam buka {jamBuka} - jam
      tutup {jamTutup}
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
