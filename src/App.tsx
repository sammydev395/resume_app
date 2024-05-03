import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Paper, Container, Grid } from '@mui/material';
import './App.css';
import Header from './Components/Header';
import TopComponent from './Components/TopComponent';
import DataTable from './Components/DataTable';
import ResultsField from './Components/ResultsField';
import { UIData as data, resumeText } from './Data/data';
import FileLoader from './Components/FileLoader';
import OpenAIService from './Service/OpenAIService'
import RadioField from './Components/RadioField';
import { SpeedInsights } from "@vercel/speed-insights/react"

// Styled components using @mui/system
const AHeader = styled('div')({
  backgroundColor: '#2196f3',
  color: 'white',
  padding: '5px 0',
  textAlign: 'center',
  fontSize: '22px',
});

const RadioGroupContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
});

const MainContainer = styled('div')`
`;

const LeftRightContainer = styled('div')`
  display: flex;
`;

const TopPanel = styled('div')`
flex: 1;
padding: 5px;
`;

const LeftPanel = styled('div')`
flex: 0.7;
padding: 5px;
`;

const RightPanel = styled('div')`
flex: 0.3;
padding: 5px;
`;

const App: React.FC = () => {
  const [fileContents, setFileContents] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState(data[0].label);
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
    <Container maxWidth="lg">
      <Header name='Sammy Dev' phoneNumber='(714) 768 4794' 
        title='ChatGPT AI Resume Reviewer' 
        githubLink='https://github.com/sammydev395/resume_app/tree/master' 
        linkedinLink='https://www.linkedin.com/in/drdev-inc-usa-82679b3?' 
        skypeLink='https://join.skype.com/invite/q9ykQHFsfXLd' 
        fileName='SammyDev'/>
      {/* <FileLoader onFileLoaded={handleFileLoaded} /> */}
      <TopComponent onSubmit={handleSubmit} />
      <RadioGroupContainer>
        <RadioField options={data.map(item => ({ key: item.label, value: item.label }))} 
                    selectedValue={selectedOption} 
                    onChange={setSelectedOption} />
      </RadioGroupContainer>
      <Grid container spacing={1}>
        <Grid item xs={12} md={5}>          
          <DataTable data={data} selectedOption={selectedOption} handleSubmit={handleSubmit} />
        </Grid>
        <Grid item xs={16} md={6}>
          <ResultsField results={response} question={question} />
        </Grid>
      </Grid>
      <OpenAIService fileContents={resumeText} question={question} setResponse={setResponse}></OpenAIService>
      <SpeedInsights/>
    </Container>
  );
}

export default App;
