import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 10,
    label: '24h',
  },
  {
    value: 20,
    label: '2 days',
  },
  {
    value: 30,
    label: '3 days',
  },
  {
    value: 40,
    label: '4 days',
  },
  {
    value: 50,
    label: '5 days',
  },
  {
    value: 60,
    label: '6 days',
  },
  {
    value: 70,
    label: '7 days',
  },
{
    value: 80,
    label: '8 days',
  },
  {
    value: 90,
    label: '9 days',
  },
  {
    value: 100,
    label: '10 days',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 700 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}