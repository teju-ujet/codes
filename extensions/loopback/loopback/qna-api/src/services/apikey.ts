import axios from 'axios';

const apiKey = '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';
const question = 'What is the capital of France?';

const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Content-Type': 'application/json',
};

axios.post(apiUrl, {
  prompt: question,
  max_tokens: 100,
}, { headers })
  .then(response => {
    // Handle the response
    console.log(response.data.choices[0]?.text.trim() || '');
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });
