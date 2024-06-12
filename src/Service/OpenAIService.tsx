import React, { useState } from 'react';
import { OpenAI } from 'openai';

const apiKey: string = process.env.REACT_APP_OPENAI_APP_API_KEY ?? '';
console.log('API Key:', apiKey);
const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

export const getChatAIResponse = async (messages: Array<{ role: 'user', content: string }|{role: 'assistant', content: string}>, inputMessage: string, 
  setState: React.Dispatch<React.SetStateAction<Array<{role: 'user', content: string}|{role: 'assistant', content: string}>>>) 
    : Promise<{ role: 'user', content: string }|{ role: 'assistant', content: string }> => {
  if (!apiKey) {
    console.error('OpenAI API key not found');
    return { role: 'assistant', content: '' };
  }

  if (!inputMessage.trim())
    return { role: 'assistant', content: '' };

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [...messages, { role: 'user', content: inputMessage }],
      max_tokens: 50,
      temperature: 0.7,
      stream: true,
    });

    let botMessage = '';
    for await (const chunk of chatCompletion) {
      botMessage = botMessage + chunk.choices[0]?.delta?.content;
      setState( [...messages, { role: 'assistant', content: botMessage }]);
    }

    return Promise.resolve({ role: 'assistant', content: botMessage });
  } catch (error) {
    console.error('Error sending message:', error);
  }
  return { role: 'assistant', content: '' };
};

export const getOpenAIResponse = async (fileContents: string, question: string, setState: React.Dispatch<React.SetStateAction<string>>): Promise<{ role: 'assistant', content: string }> => 
{
    if (!apiKey) {
      console.error('OpenAI API key not found');
      return { role: 'assistant', content: '' };
    }
    if (fileContents === '' || question === '')
      return { role: 'assistant', content: '' };

    try {
      const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ "role": "system", "content": fileContents }, { "role": "user", "content": question }],
        max_tokens: 2000,  // Max amount of tokens the AI will respond with
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        temperature: 1, // lower is more coherent and conservative, higher is more creative and diverse.
        stream: true,
      });

      let botMessage = '';
      for await (const chunk of chatCompletion) {
        botMessage = botMessage + chunk.choices[0]?.delta?.content;
        setState(botMessage);
      }

    return Promise.resolve({ role: 'assistant', content: botMessage });
  } catch (error) {
    console.error('Error sending message:', error);
  }
  return { role: 'assistant', content: '' };
};

export default getOpenAIResponse;