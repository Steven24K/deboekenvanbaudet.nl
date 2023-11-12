import * as React from 'react';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className="header">
        <h1>De boeken van Baudet</h1>
        <p>Titels die Thiery Baudet geschreven zou kunnen hebben</p>
      </div>
      <div className="baudets-menu">
        <ul className='menu'>
          <li><a href="#">Boeken</a></li>
          <li><a href="#">Stuur titel in</a></li>
          <li><a href="#">Ben jij Thierry Baudet?</a></li>
          <li><a href="#">Disclaimer</a></li>
        </ul>
      </div>

      <div className="row">
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="card d-block">
            <div className="card-body d-flex align-items-center p-0">
              <div className="w-100 border-right">
                <img className="img-fluid" src="https://winkel.forumvoordemocratie.nl/cdn/shop/files/niemand_in_de_cockpit.png?v=1697190394&width=600" alt="Image Description" />
              </div>
            </div>
            <div className="card-footer text-center py-4">
              <h3 className="h5 mb-1">Niemand in de cockpit</h3>
              <b className="mb-1">Thierry Baudet</b>
              <span className="d-block text-muted font-size-1 mb-3">€20,-</span>
              <a className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5" href="#">Details</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-5 mb-md-0">
          <div className="card d-block">
            <div className="card-body d-flex align-items-center p-0">
              <div className="w-100 border-right">
                <img className="img-fluid" src="https://winkel.forumvoordemocratie.nl/cdn/shop/files/niemand_in_de_cockpit.png?v=1697190394&width=600" alt="Image Description" />
              </div>
            </div>
            <div className="card-footer text-center py-4">
              <h3 className="h5 mb-1">Niemand in de cockpit</h3>
              <b className="mb-1">Thierry Baudet</b>
              <span className="d-block text-muted font-size-1 mb-3">€20,-</span>
              <a className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5" href="#">Details</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card d-block">
            <div className="card-body d-flex align-items-center p-0">
              <div className="w-100 border-right">
                <img className="img-fluid" src="https://winkel.forumvoordemocratie.nl/cdn/shop/files/niemand_in_de_cockpit.png?v=1697190394&width=600" alt="Image Description" />
              </div>
            </div>
            <div className="card-footer text-center py-4">
              <h3 className="h5 mb-1">Niemand in de cockpit</h3>
              <b className="mb-1">Thierry Baudet</b>
              <span className="d-block text-muted font-size-1 mb-3">€20,-</span>
              <a className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5" href="#">Details</a>
            </div>
          </div>
        </div>
      </div>



    </div>

  );
}

export default App;
