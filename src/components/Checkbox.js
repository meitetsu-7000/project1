import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';


function Checkboxes() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
        </div>
  );
}

export default Checkboxes