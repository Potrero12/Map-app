import React from 'react';
import ReactDOM from 'react-dom/client';

import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoicG90cmVybzEyIiwiYSI6ImNrem85ZWIydzU1NzkydXBxY252NDEwc3MifQ.5hEr94M0-mkS5FGIj_lGbw';

if(!navigator.geolocation) {
  alert('Tu navegador no tiene opcionde  geolocation')
  throw new Error('Tu navegador no tiene opcionde  geolocation');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
