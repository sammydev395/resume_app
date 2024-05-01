// OpenAIService.tsx
import React, { useEffect, useRef } from 'react';
import  { OpenAI } from 'openai';


interface OpenAIServiceProps {
  fileContents: string;
  question: string;
  setResponse: React.Dispatch<React.SetStateAction<string>>;
};

const OpenAIService: React.FC<OpenAIServiceProps> =  ({ fileContents, question, setResponse  }) => {
  const responseRef = useRef<string>();
  const apiKey: string = process.env.REACT_APP_OPENAI_APP_API_KEY ?? '';
  console.log('API Key:', apiKey);

   useEffect(() => {
    const getOpenAIResponse = async () => {
      if(fileContents === '' || question === '') return;

      if (!apiKey) {
        console.error('OpenAI API key not found');
        return null;
      }
    
      responseRef.current = '';  
      const openai = new OpenAI({ apiKey:apiKey, dangerouslyAllowBrowser: true });
      try {
        const chatCompletion = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [ { "role": "system", "content": fileContents }, { "role": "user", "content": question } ], 
          max_tokens: 500,  // Max amount of tokens the AI will respond with
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          temperature: 1, // lower is more coherent and conservative, higher is more creative and diverse.
          stream: true,
        });
        
        for await (const chunk of chatCompletion) {
         responseRef.current = responseRef.current + chunk.choices[0]?.delta?.content;
         console.log(responseRef.current);
         setResponse(responseRef.current);
        }
        
      } catch (error) {
        console.error('Error:', error);
      }
    }

    getOpenAIResponse();
  }, [fileContents, question]);

  return null;
};

export default OpenAIService;
