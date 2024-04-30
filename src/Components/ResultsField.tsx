import { TextField, Paper, styled, Typography } from '@mui/material';
import React from 'react';

const StyledPaper = styled(Paper)`
  padding: 2px;
  background-color: #f0f0f0;
  text-align: center;
`;

const ResultsHeader = styled(Typography)({
  width: '100%',
  textAlign: 'center',
  backgroundColor: 'lightblue',
});


const StyledResultsTextField = styled(TextField)`
  margin-top: 20px;
`;

const ResultsField = ({ results, question }: { results: string, question: string }) => {
  return (
    <StyledPaper>
      <ResultsHeader>
        <Typography variant="h5">Results {question}</Typography>
      </ResultsHeader>
      <StyledResultsTextField
        variant="outlined"
        value={results}
        multiline
        fullWidth 
        rows={30}
        InputProps={{
          readOnly: true,
        }}
      />      
    </StyledPaper>
  );
};

export default ResultsField;
