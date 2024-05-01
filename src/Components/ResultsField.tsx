import { TextField, Paper, styled, Typography, Box } from '@mui/material';
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
    <Box display="flex" flexDirection="column" alignItems="center">
      <ResultsHeader variant="h6" mb={2}>
        Results {question}
      </ResultsHeader>
      <TextField
        variant="outlined"
        multiline
        fullWidth
        rows={40}
        value={results}
        InputProps={{
          readOnly: true,
        }}
      />
    </Box>
  );
};

export default ResultsField;
