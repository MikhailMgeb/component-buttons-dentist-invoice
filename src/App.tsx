import React from 'react';

import './App.css';
import { ButtonsDentistInvoice } from './components/ButtonsDentistInvoice/ButtonsDentistInvoice';

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
    </div>
  );
}

export { App };
