import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" >Disabled</Button>
        <Button variant="contained" href="#contained-buttons">Link</Button>
      </div>
      <div>
        <Button variant="contained" style={{ backgroundColor: "#0a786c" }}>
         Contained
        </Button>
        <Button variant="contained" style={{ backgroundColor: "#0a786c" }}>
         Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons" style={{ backgroundColor: "#0a786c" }}>
         Link
        </Button>
      </div>
      <div>
        <Button variant="contained" style={{ backgroundColor: "black" }}>
         Contained
        </Button>
        <Button variant="contained" style={{ backgroundColor: "black" }}>
         Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons" style={{ backgroundColor: "black" }}>
         Link
        </Button>
      </div>
    </Box>
  );
}