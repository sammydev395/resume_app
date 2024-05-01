import { TextField, Paper, styled, Typography, Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';

const AutoScrollTextField = styled(TextField)(({ theme }) => ({
  // Add any custom styles here
  width: '100%', // Example width
  maxHeight: '600px', // Example max height to enable scrolling
  overflowY: 'auto', // Enable vertical scrolling
}));

const ResultsHeader = styled(Typography)({
  width: '100%',
  textAlign: 'center',
  backgroundColor: 'lightblue',
});

const ResultsField = ({ results, question }: { results: string, question: string }) => {
  const textFieldRef = useRef<HTMLInputElement>(null);

  // Automatically scroll to the bottom whenever the component updates
  useEffect(() => {
    if (textFieldRef.current) {
      // Scroll to the bottom of the text field
      textFieldRef.current.scrollTop = textFieldRef.current.scrollHeight;
    }
  }, [textFieldRef]);
  
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <ResultsHeader variant="h6" mb={2}>
        Results {question}
      </ResultsHeader>
      <TextField
        inputRef={textFieldRef}
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
