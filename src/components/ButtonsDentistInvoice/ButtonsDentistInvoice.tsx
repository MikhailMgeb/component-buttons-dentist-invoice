import React, { FC, MouseEvent, useState } from 'react';

import { cnButtonsDentistInvoice } from './ButtonsDentistInvoice.classname';
import { ButtonsDentistInvoiceProps, CheckList } from './ButtonsDentistInvoiceType';

import './ButtonsDentistInvoice.css';

const DEFAULT_VALUE = {
    installingSeal: 0,
    channelCleaning: 0,
    treatmentCaries: 0
}

const ButtonsDentistInvoice: FC<ButtonsDentistInvoiceProps> = ({ serviceName, price }) => {
    const [checkList, getCheckList] = useState<CheckList>(DEFAULT_VALUE);


    const handleClickControlService = (event: MouseEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        if (target.name === undefined) {
            return;
        }

        if (target.name === 'resetButton') {
            getCheckList(DEFAULT_VALUE);
        }

        if (target.id === 'plus') {
            getCheckList((prev: any) => ({ ...prev, [target.name]: prev[target.name] + 1 }));
        }

        if (target.id === 'minus') {
            if (checkList[target.name] === 0) {
                return;
            }

            getCheckList((prev: any) => ({ ...prev, [target.name]: prev[target.name] - 1 }));
        }
    }

    const getTotalPrice = (): number => {
        return checkList.installingSeal * 3000 + checkList.channelCleaning * 5000 +
            checkList.treatmentCaries * 2000;
    }

    return (
        <article className={cnButtonsDentistInvoice('')}>
            <ul className={cnButtonsDentistInvoice('List')}>
                <li className={cnButtonsDentistInvoice('Item')}>
                    <div className={cnButtonsDentistInvoice('ItemCard')}>
                        <div className={cnButtonsDentistInvoice('ItemLabel')}>
                            <label>{serviceName.installingSeal}</label>
                        </div>
                        <div onClick={handleClickControlService}>
                            <button name="installingSeal" id="minus" className={cnButtonsDentistInvoice('Button', { minus: true })}>-</button>
                            <span className={cnButtonsDentistInvoice('ServiceCount')}>{checkList.installingSeal}</span>
                            <button name="installingSeal" id="plus" className={cnButtonsDentistInvoice('Button', { plus: true })}>+</button>
                        </div>
                    </div>
                </li>
                <li className={cnButtonsDentistInvoice('Item')}>
                    <div className={cnButtonsDentistInvoice('ItemCard')}>
                        <div className={cnButtonsDentistInvoice('ItemLabel')}>
                            <label>{serviceName.channelCleaning}</label>
                        </div>
                        <div onClick={handleClickControlService}>
                            <button name="channelCleaning" id="minus" className={cnButtonsDentistInvoice('Button', { minus: true })}>-</button>
                            <span className={cnButtonsDentistInvoice('ServiceCount')}>{checkList.channelCleaning}</span>
                            <button name="channelCleaning" id="plus" className={cnButtonsDentistInvoice('Button', { plus: true })}>+</button>
                        </div>
                        <div className={cnButtonsDentistInvoice('ServiceCount')}>
                        </div>
                    </div>
                </li>
                <li className={cnButtonsDentistInvoice('Item')}>
                    <div className={cnButtonsDentistInvoice('ItemCard')}>
                        <div className={cnButtonsDentistInvoice('ItemLabel')}>
                            <label>{serviceName.treatmentCaries}</label>
                        </div>
                        <div onClick={handleClickControlService}>
                            <button name="treatmentCaries" id="minus" className={cnButtonsDentistInvoice('Button', { minus: true })}>-</button>
                            <span className={cnButtonsDentistInvoice('ServiceCount')}>{checkList.treatmentCaries}</span>
                            <button name="treatmentCaries" id="plus" className={cnButtonsDentistInvoice('Button', { plus: true })}>+</button>
                        </div>
                    </div>
                </li>
                <div className={cnButtonsDentistInvoice('TotalPrice')}>
                    “Чек”
                    <div className={cnButtonsDentistInvoice('ColumnTotal')}>{checkList.installingSeal ? `- Установка пломбы: ${checkList.installingSeal} услуги` : null}</div>
                    <div className={cnButtonsDentistInvoice('ColumnTotal')}>{checkList.channelCleaning ? `- Чистка каналов: ${checkList.channelCleaning} услуги` : null}</div>
                    <div className={cnButtonsDentistInvoice('ColumnTotal')}>{checkList.treatmentCaries ? `- Лечение кариеса: ${checkList.treatmentCaries} услуги` : null}</div>
                    <br />
                    Итого: {getTotalPrice()} руб.
                </div>
            </ul>
            <div onClick={handleClickControlService} className={cnButtonsDentistInvoice('Reset')}>
                <button name='resetButton' className={cnButtonsDentistInvoice('ResetButton', { position: true })}>
                    Следующий клиент
                </button>
            </div>
        </article>
    );
}

export { ButtonsDentistInvoice };
