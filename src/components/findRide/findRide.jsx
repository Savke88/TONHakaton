import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Map } from '../Map/Map';
import './findRide.scss';

export function FindRide() {
  return (
    <div className="find-ride-page">
      <Header />
      <div className="map-container">
        <Map
          iconUrl="https://encryptedd-tbn0.gstatic.com/images?q=tbn:ANd9GcQS6qh61ytGqSAnhadCmTyOn9xCvoTtIcQAJw&s"
          style={{ height: "400px", width: "100%" }}
          markers={[
            { geocode: [44.7, 20.4], popUp: "Taksista 1" },
            { geocode: [44.82, 20.43], popUp: "Taksista 2" },
            { geocode: [44.67, 20.41], popUp: "Taksista 3" },
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default FindRide;