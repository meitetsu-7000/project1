import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel 
            control={
                <Checkbox defaultChecked />
            } 
            label="Label-01"
            />
        <FormControlLabel 
            control={
                <Checkbox defaultChecked />
            } 
            label={
                <span style={{ color: "blue" }}>
                  Label-02
                </span>
                } 
            />
        <FormControlLabel 
            control={
                <Checkbox defaultChecked />
            } 
            label={
                <span style={{ color: "#0a786c" }}>
                  Label-03
                </span>
                } 
            />
        <FormControlLabel 
            control={
                <Checkbox defaultChecked />
            } 
            label={
                <span style={{ color: "#0a786c", fontWeight: 'bold' }}>
                  Label-04
                </span>
                } 
            />
            <FormControlLabel 
            control={
                <Checkbox defaultChecked />
            } 
            label={
                <span style={{ color: "#0a786c", fontWeight: 'bold', fontSize: '120%' }}>
                  Label-05
                </span>
                } 
            />
    </FormGroup>
  );
}