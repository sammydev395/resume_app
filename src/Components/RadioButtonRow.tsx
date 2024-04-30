import React, { useState } from 'react';
import { styled } from '@mui/system';
import { TableRow as MuiTableRow, TableCell, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import { TechDetailsDataRow } from '../Data/data';

// Define the styles for the table cell
const ColorTableCell = styled(TableCell)({
  width: 100, // Set a fixed width for each column
  backgroundColor: '#f0f0f0', // Background color
  color: '#333', // Text color
});

const ColorTableRadioCell = styled(TableCell)({
  width: 300, // Set a fixed width for each column
  backgroundColor: '#f0f0f0', // Background color
  color: '#333', // Text color
});

// Define the styles for the radio group
const StyledRadioGroup = styled(RadioGroup)({
  display: 'flex',
  flexDirection: 'row',
});

const SubmitButton = styled(Button)`
  margin-top: 8px;
`;

interface RadioButtonRowProps {
  data: TechDetailsDataRow;
  onSubmit: (selectedRadio: string) => void;
}

export const RadioButtonRow: React.FC<RadioButtonRowProps> = ({ data, onSubmit }) => {
  const { label, options  } = data;
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(selectedOption);
  };
  
  return (
    <MuiTableRow>
      <ColorTableCell>{label}</ColorTableCell>
      <ColorTableRadioCell>
          <StyledRadioGroup value={selectedOption} onChange={handleOptionChange}>
              {options.map((option, index) => (
                <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
              ))}
          </StyledRadioGroup>        
      </ColorTableRadioCell>
      <ColorTableCell>
        <SubmitButton variant="contained" onClick={handleSubmit}>Submit</SubmitButton>
      </ColorTableCell>
    </MuiTableRow>
    );
};

export default RadioButtonRow;
