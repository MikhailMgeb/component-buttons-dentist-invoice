import React, { ChangeEvent, useState } from 'react';
import Hexagon3D from 'hexagon-3d-react';

import { cnUseHexagon } from './UseHexagon.classname';

import './UseHexagon.css';

type Inscriptions = {
    topChildren: string;
    side1Children: string;
    side2Children: string;
    side3Children: string;
    side4Children: string;
    side5Children: string;
    side6Children: string;
}

const DEFAULT_INSCRIPTIONS = {
    topChildren: '',
    side1Children: '',
    side2Children: '',
    side3Children: '',
    side4Children: '',
    side5Children: '',
    side6Children: '',
};

const UseHexagon = () => {
    const [inscriptions, setInscriptions] = useState<Inscriptions>(DEFAULT_INSCRIPTIONS);

    const handleChangeTextInput = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        setInscriptions((prev) => ({ ...prev, [target.name]: target.value }));
    }

    return (
        <div className={cnUseHexagon('')}>
            <div className={cnUseHexagon('Field')} onChange={handleChangeTextInput}>
                <input className={cnUseHexagon('Input')} name='topChildren' defaultValue={inscriptions.topChildren} />
                <input className={cnUseHexagon('Input')} name='side1Children' defaultValue={inscriptions.side1Children} />
                <input className={cnUseHexagon('Input')} name='side2Children' defaultValue={inscriptions.side2Children} />
                <input className={cnUseHexagon('Input')} name='side3Children' defaultValue={inscriptions.side3Children} />
                <input className={cnUseHexagon('Input')} name='side4Children' defaultValue={inscriptions.side4Children} />
                <input className={cnUseHexagon('Input')} name='side5Children' defaultValue={inscriptions.side5Children} />
                <input className={cnUseHexagon('Input')} name='side6Children' defaultValue={inscriptions.side6Children} />
            </div>
            <Hexagon3D
                width={230}
                height={260}
                rotateZ={20}
                rotateX={40}
                growTop={true}
                topChildren={inscriptions.topChildren}
                side1Children={inscriptions.side1Children}
                side2Children={inscriptions.side2Children}
                side3Children={inscriptions.side3Children}
                side4Children={inscriptions.side4Children}
                side5Children={inscriptions.side5Children}
                side6Children={inscriptions.side6Children}
            />
        </div>
    );
}

export { UseHexagon };
