import React, { ChangeEvent, FC } from 'react';
import Switch from '@mui/material/Switch';

import { cnOnlyTwoChecked } from './OnlyTwoChecked.classname';

import './OnlyTwoChecked.css';

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

type OnlyTwoCheckedProps = {
    onChangeCheck: (name: string) => void;
    optionCheck: string[]
}

const OnlyTwoChecked: FC<OnlyTwoCheckedProps> = ({ onChangeCheck, optionCheck }) => {

    const handleChangeSwitch = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeCheck(event.target.name);
    }

    const isContainsArray = (value: string) => {
        return optionCheck.includes(value);
    }

    return (
        <div className={cnOnlyTwoChecked()}>
            <div className={cnOnlyTwoChecked('Wrapper')}>
                <label className={cnOnlyTwoChecked('WrapperLabel')}>Дешевая</label>
                <Switch {...label} name='cheap' checked={isContainsArray('cheap')} onChange={handleChangeSwitch} />
            </div>
            <div>
                <label className={cnOnlyTwoChecked('WrapperLabel')}>Быстрая</label>
                <Switch {...label} name='fast' checked={isContainsArray('fast')} color="secondary" onChange={handleChangeSwitch} />
            </div>
            <div>
                <label className={cnOnlyTwoChecked('WrapperLabel')}>Надежная</label>
                <Switch {...label} name='reliable' checked={isContainsArray('reliable')} color="warning" onChange={handleChangeSwitch} />
            </div>
        </div>
    );
}

export { OnlyTwoChecked };
