import React from 'react';
import Switch from '@material-ui/core/Switch';



function Switches() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <div>
        <Switch {...label} defaultChecked />
        <Switch {...label} />
        <Switch {...label} disabled defaultChecked />
        <Switch {...label} disabled />
        </div>
    );
}

export default Switches