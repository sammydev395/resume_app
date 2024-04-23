import React, { useState } from 'react';
import { TableRow as MuiTableRow, TableCell, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import { DataRow } from './data';

interface RadioButtonRowProps {
  data: DataRow;
  onSubmit: (selectedRadio: string) => void;
}

export const RadioButtonRow: React.FC<RadioButtonRowProps> = ({ data, onSubmit }) => {
  const { label, radioOptions  } = data;
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(selectedOption);
  };
  
  return (
    <MuiTableRow>
      <TableCell>{label}</TableCell>
      <TableCell>
          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
              {radioOptions.map((option, index) => (
                <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
              ))}
          </RadioGroup>        
      </TableCell>
      <TableCell>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </TableCell>
    </MuiTableRow>
    );
};

export default RadioButtonRow;
