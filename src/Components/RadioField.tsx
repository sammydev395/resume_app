import React from 'react';
import { Radio, RadioGroup, FormControlLabel, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Define the styles for the radio group
const StyledRadioGroup = styled(RadioGroup)({
  display: 'flex',
  flexDirection: 'row',
});

// Define the styles for the radio button label
const StyledFormControlLabel = styled(FormControlLabel)({
  flex: '1', // Each radio button takes equal width
});

interface RadioFieldProps {
  options: { key: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioField: React.FC<RadioFieldProps> = ({ options, selectedValue, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange((event.target as HTMLInputElement).value);
  };

  return (
    <Paper sx={{ width: '80%', margin: 'auto', marginTop: '50px', padding: '20px' }}>
      <StyledRadioGroup value={selectedValue} onChange={handleChange}>
        {options.map(option => (
          <StyledFormControlLabel key={option.key} value={option.value} control={<Radio />} label={option.key} />
        ))}
      </StyledRadioGroup>
    </Paper>    
  );
};

export default RadioField;
