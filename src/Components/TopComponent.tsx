import React from 'react';
import { styled } from '@mui/system';
import { TextField, Button, Paper, Grid } from '@mui/material';

const StyledResultsTextField = styled(TextField)`
    max-width: 90%;
    margin: 8px;
`;

const SubmitButton = styled(Button)`
  margin: 16px;
`;

interface TopComponentProps {
  onSubmit: (query: string) => void;
}

const TopComponent: React.FC<TopComponentProps> = ({ onSubmit }) => {
  const [query, setQuery] = React.useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={8} md={10}>
        <StyledResultsTextField
                    variant="outlined"
                    label="Enter any arbitrary query in any language or use the query selector on the left below"
                    fullWidth
                    value={query}
                    onChange={handleQueryChange}
                />
      </Grid>
      <Grid item xs={4} md={2}>
        <SubmitButton variant="contained" onClick={handleSubmit}>Submit</SubmitButton>
      </Grid>
    </Grid>
  );
};

export default TopComponent;
