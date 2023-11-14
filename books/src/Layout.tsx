import * as React from 'react';
import { Link } from "react-router-dom";
import './App.css';


function Layout(props: { children?: React.ReactNode }) {
  return (
    <div className='container'>
      <div className="header" style={{
        backgroundImage: `linear-gradient(rgba(126, 93, 93, 0.527),rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}"/img/1520219659903.jpg")`
      }}>
        <h1>De boeken van Baudet</h1>
        <p>De ultieme boekenlijst van Thierry Baudet</p>
      </div>
      <div className="baudets-menu">
        <ul className='menu'>
          <li><Link to="/">Boeken</Link></li>
          <li><Link to="/insturen">Stuur titel in</Link></li>
          <li><Link to="/thierry-baudet">Ben jij Thierry Baudet?</Link></li>
          <li><Link to="/disclaimer">Disclaimer</Link></li>
        </ul>
      </div>
      {props.children}

      <div className='footer'>
        &copy; deboekenvanbaudet.nl
      </div>
    </div>

  );
}

export default Layout;
