import * as React from 'react';
import { NavBar } from './components/NavBar';
import { PlaceInfo } from './components/PlaceInfo';
import { MainTemp } from './components/MainTemp';
import './Current.scss';

const current: React.FC = () => (
  <div id="current" className="wrapper">
    <NavBar />
    <PlaceInfo />
    <MainTemp />
  </div>
);
export { current as Current };
