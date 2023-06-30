import React from "react";
import ReactDOM from "react-dom/client";

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
      <Food />
      <Food />
      <Food />
      <Food />
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

function Food() {
  return (
    <div>
      <img src="food/soto-betawi.jpg" alt="" width="100" height="70" />
      <h2>Soto Betawi</h2>
      <p>Soto betawi dari Jakarta</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
