import React, { useEffect, useState } from 'react';
import './App.css';
import { Table, TableRow, TableCell, TableBody, TableContainer, TableHead, Paper } from '@mui/material';
import RadioButtonRow from './RadioButtonRow';
import ResultsField from './ResultsField';
import { UIData as data, resumeText } from './data';
import FileLoader from './FileLoader';
import OpenAIService from './Service/OpenAIService'

const App: React.FC = () => {

  const [fileContents, setFileContents] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleFileLoaded = (contents: string) => {
    setFileContents(contents);
  };

  const handleSubmit = (selectedOption: string) => {
    console.log('Submitted value:', selectedOption);
    setQuestion(selectedOption);
  };

  return (
    <div className="App">
      <h1>ChatGPT AI Resume Reviewer</h1>
      <FileLoader onFileLoaded={handleFileLoaded} />
      <br />
      <TableContainer component={Paper}>
        <Table>
        <TableHead>
            <TableRow>
              <TableCell>Label</TableCell>
              <TableCell>Radio Options</TableCell>
              <TableCell>Submit</TableCell>
            </TableRow>
          </TableHead>          <TableBody>
            {data.map((rowData, index) => (
              <RadioButtonRow key={index} data={rowData} onSubmit={handleSubmit} />            
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ResultsField results={response} question={question} />
      <OpenAIService fileContents={resumeText} question={question} setResponse={setResponse}></OpenAIService>
    </div>
  );
}

export default App;
