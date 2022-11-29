import * as React from 'react';

export function Accueil() {
  return (
    <div className="container-fluid">
      <div
        className="container py-5 d-flex flex-column text-center justify-content-center align-items-center"
        style={{ minHeight: '300px' }}
      >
        <h2> Pension Puaka </h2>
        <p>
          La meilleure pension des îles Marquises, situé à Nuku HIva, Taiohae.
          Venez vous ressourcer dans notre pension familliale.
        </p>

        <div className="container py-5 ">
          <div className="row">
            <div className="col col-md-4">
              <div className="card">
                <img src="https://frenchmorning.com/wp-content/uploads/2018/06/12719328_10153885901760505_5434314716880717998_o.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Nos services</p>
                </div>
              </div>
            </div>
            <div className="col col-md-4">
              <div className="card">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/ce/39/02/bay-view-bungalow.jpg?w=1400&h=-1&s=1" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Reservez avec nous</p>
                </div>
              </div>
            </div>
            <div className="col col-md-4">
              <div className="card">
                <img src="https://www.airtahitinui.com/sites/default/files/img-slides/desktop/flyingwithus_spirit_hero_desk1_0.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Nous contacter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
