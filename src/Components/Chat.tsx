import React, { useState } from 'react';
import { Container, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { getChatAIResponse } from '../Service/OpenAIService'; 

interface ChatProps {
    serviceRef: React.RefObject<HTMLDivElement>;
  };
  
const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Array<{role: 'user', content: string}|{role: 'assistant', content: string}>>([]);
  const [inputMessage, setInputMessage] = useState<string>('');

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    console.log('Submitted value:', inputMessage);
    getChatAIResponse(messages, inputMessage, setMessages).then((response) => {
        setMessages(prevMessages => [...prevMessages, { role: 'user', content: inputMessage }, response]);
    });

    setInputMessage('');
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" height="400px" justifyContent="flex-end" overflow="auto">
        {messages.map((message, index) => (
          <div key={index}>
            <p>{message.content}</p>
          </div>
        ))}
      </Box>
      <TextField
        label="Your message"
        variant="outlined"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <Button variant="contained" onClick={handleSendMessage}>Send</Button>
    </Container>
  );
};

export default Chatbot;
