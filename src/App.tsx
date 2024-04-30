import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Paper, Container } from '@mui/material';
import './App.css';
import TopComponent from './Components/TopComponent';
import DataTable from './Components/DataTable';
import ResultsField from './Components/ResultsField';
import { UIData as data, resumeText } from './Data/data';
import FileLoader from './Components/FileLoader';
import OpenAIService from './Service/OpenAIService'
import RadioField from './Components/RadioField';

// Styled components using @mui/system
const Header = styled('div')({
  backgroundColor: '#2196f3',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
  fontSize: '24px',
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
flex: 1;
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
    <MainContainer>
      <Header>ChatGPT AI Resume Reviewer</Header>
      {/* <FileLoader onFileLoaded={handleFileLoaded} /> */}
      <TopPanel>
        <TopComponent onSubmit={handleSubmit} />
      </TopPanel>
      <RadioGroupContainer>
        <RadioField options={data.map(item => ({ key: item.label, value: item.label }))} 
                    selectedValue={selectedOption} 
                    onChange={setSelectedOption} />
      </RadioGroupContainer>
      <LeftRightContainer>
        <LeftPanel>
          <DataTable data={data} selectedOption={selectedOption} handleSubmit={handleSubmit} />
        </LeftPanel>
        <RightPanel>
          <ResultsField results={response} question={question} />
        </RightPanel>
      </LeftRightContainer>
      <OpenAIService fileContents={resumeText} question={question} setResponse={setResponse}></OpenAIService>
    </MainContainer>
  );
}

export default App;
