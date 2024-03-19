import React, { FC, useState } from 'react';

import { cnButtonsDentistInvoice } from './ButtonsDentistInvoice.classname';
import { ButtonsDentistInvoiceProps } from './ButtonsDentistInvoiceType';

import './ButtonsDentistInvoice.css';

const ButtonsDentistInvoice: FC<ButtonsDentistInvoiceProps> = ({ serviceName, price }) => {
    const [] = useState();

    

    return (
        <article className={cnButtonsDentistInvoice('')}>
            <ul className={cnButtonsDentistInvoice('List')}>
                <li className={cnButtonsDentistInvoice('Item')}>
                    <div className={cnButtonsDentistInvoice('ItemCard')}>
                        <div className={cnButtonsDentistInvoice('ItemLabel')}>
                            <label>{serviceName.installingSeal}</label>
                        </div>
                        <div>
                            <button className={cnButtonsDentistInvoice('Button', { minus: true })}>-</button>
                            <span className={cnButtonsDentistInvoice('ServiceCount')}>{ }</span>
                            <button className={cnButtonsDentistInvoice('Button', { plus: true })}>+</button>
                        </div>
                    </div>
                </li>
                <li className={cnButtonsDentistInvoice('Item')}>
                    <div className={cnButtonsDentistInvoice('ItemCard')}>
                        <div className={cnButtonsDentistInvoice('ItemLabel')}>
                            <label>{serviceName.channelCleaning}</label>
                        </div>
                        <div>
                            <button className={cnButtonsDentistInvoice('Button', { minus: true })}>-</button>
                            <span className={cnButtonsDentistInvoice('ServiceCount')}>{0}</span>
                            <button className={cnButtonsDentistInvoice('Button', { plus: true })}>+</button>
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
                        <div>
                            <button className={cnButtonsDentistInvoice('Button', { minus: true })}>-</button>
                            <span className={cnButtonsDentistInvoice('ServiceCount')}>{ }</span>
                            <button className={cnButtonsDentistInvoice('Button', { plus: true })}>+</button>
                        </div>
                    </div>
                </li>
            </ul>
        </article>
    );
}

export { ButtonsDentistInvoice };
