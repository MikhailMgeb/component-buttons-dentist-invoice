import React, { useState } from 'react';

import { ButtonsDentistInvoice } from './components/ButtonsDentistInvoice/ButtonsDentistInvoice';
import { UseHexagon } from './components/UseHexagon/UseHexagon';
import { OnlyTwoChecked } from './components/OnlyTwoChecked/OnlyTwoChecked';

import './App.css';

const App = () => {
  const [optionCheck, setOptionCheck] = useState<string[]>([]);

  const onChangeCheck = (name: string) => {

    if (optionCheck.includes(name)) {
      setOptionCheck((prev) => {
        return prev.filter(item => item !== name);
      });
      return;
    }

    setOptionCheck((prev) => [...prev, name]);
  }

  if (optionCheck.length > 2) {
    setOptionCheck(prev => {
      prev.splice(1, 1);

      return [...prev];
    });
  }

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
      <OnlyTwoChecked onChangeCheck={onChangeCheck} optionCheck={optionCheck} />
    </div>
  );
}

export { App };
