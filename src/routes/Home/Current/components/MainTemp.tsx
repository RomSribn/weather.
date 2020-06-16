import * as React from 'react';
import { IMainTemp } from 'routes/Home/interface';

const MainTemp: React.FC<IMainTemp> = ({ temp, conditions }) => (
  <>
    <p className="temp">{temp}</p>
    <p className="conditions">{conditions}</p>
  </>
);

export { MainTemp };
