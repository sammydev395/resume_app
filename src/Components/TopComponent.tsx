import React from 'react';
import { styled } from '@mui/system';
import { TextField, Button, Paper } from '@mui/material';

const StyledResultsTextField = styled(TextField)`
    max-width: 95%;
`;

const SubmitButton = styled(Button)`
  margin: 8px;
`;

interface TopComponentProps {
  onSubmit: (query: string) => void;
}

const TopComponent: React.FC<TopComponentProps> = ({ onSubmit }) => {
  const [query, setQuery] = React.useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleFormSubmit}>
        <StyledResultsTextField
            variant="outlined"
            label="Enter Query"
            fullWidth
            value={query}
            onChange={handleQueryChange}
        />
        <SubmitButton variant="contained" type="submit">Submit</SubmitButton>
     </form>
  );
};

export default TopComponent;
