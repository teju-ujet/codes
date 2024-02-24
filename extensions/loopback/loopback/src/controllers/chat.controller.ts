// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';


import { post, requestBody } from '@loopback/rest';
import axios from 'axios';

export class ChatController {
  @post('/api/chat')
  async chat(@requestBody() requestBody: { message: string }): Promise<{ reply: string }> {
    const { message } = requestBody;

    // Make a request to the ChatGPT API
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: message,
      max_tokens: 50,
    }, {
      headers: {
        'Authorization': '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',
        'Content-Type': 'application/json',
      },
    });
    const { choices } = response.data;
    const reply = choices[0].text.trim();

    return { reply };
  }
}

