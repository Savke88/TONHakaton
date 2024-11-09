import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sadrzaj.scss';
import crntaxi from '../images/crntaxi.png';

export function Sadrzaj() {
  const navigate = useNavigate();

  return (
    <div className="Sadrzaj">
      <img
        src={crntaxi}
        className="image"
        alt="Taxi"
        onClick={() => navigate('/find-ride')}
      />
      <button
        className="centerButton"
        onClick={() => navigate('/find-ride')}
      >
        Find Ride
      </button>
    </div>
  );
}
