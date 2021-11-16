import React from "react";
import Cookies from "universal-cookie";


// Stateless Functional Component

const NavBar = ({ totalCounters, totalSum}) => {
  const cookies = new Cookies();
  if(totalCounters) {
    cookies.set('TotalCounters', totalCounters, {path: '/'});
    cookies.set('TotalSum', totalSum, {path: '/'});
    localStorage.setItem('myData', totalCounters);
    console.log(localStorage.getItem('myData'));
  }
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {cookies.get('TotalSum')}
        </span>/
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {cookies.get('TotalCounters')}
        </span>
        Items
      </div>
    </nav>
  );
};

export default NavBar;
