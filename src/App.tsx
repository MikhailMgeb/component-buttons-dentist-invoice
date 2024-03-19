import React from 'react';

import { ButtonsDentistInvoice } from './components/ButtonsDentistInvoice/ButtonsDentistInvoice';
import { UseHexagon } from './components/UseHexagon/UseHexagon';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <ButtonsDentistInvoice
        serviceName=
        {{
          installingSeal: "Установка пломбы",
          channelCleaning: "Чистка каналов",
          treatmentCaries: "Лечение кариеса"
        }}
        price=
        {{
          installingSealPrice: 3000,
          channelCleaningPrice: 5000,
          treatmentCariesPrice: 2000
        }} />
      <UseHexagon />
    </div>
  );
}

export { App };
