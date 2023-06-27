import React from 'react';
import RocketsView from '../redux/features/rocketView';
import '../styles/rockets.css';

const RocketsDisplay = () => (
  <section className="rocketSection">
    <RocketsView />
  </section>
);

export default RocketsDisplay;
