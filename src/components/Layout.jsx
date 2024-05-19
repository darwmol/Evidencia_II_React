import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

export const Layout = () => {
  return (
    <div>
      <div className="TiendaXpress-wrapper1">
        <h1 className="TiendaXpress1">TiendaXpress</h1>
        <section className="section1">
          <Link className="linkhome-products" to="/">Home</Link>
          <Link className="linkcarrito-products" to="/Carrito" >
          <img className="shopcar" src="/shopping-cart.png"></img>
               
          </Link>
        </section>
      </div>
      <Outlet />
    </div>
  );
};
