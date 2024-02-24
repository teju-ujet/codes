// import { get, post, requestBody } from '@loopback/rest';
// import axios from 'axios';
// import { Recipe } from '../models';

// export class RecipesController {
//   private API_KEY = '392d8314dc8c4a9f966a57f30ded5164';
//   private API_URL = 'https://api.spoonacular.com';
//   @get('/recipes/{id}/information', {
//     responses: {
//       '200': {
//         description: 'Recipe information',
//         content: {
//           'application/json': {
//             schema: { 'x-ts-type': Recipe },
//           },
//         },
//       },
//     },
//   })
//   async getRecipeInformation(
//     @requestBody() request: Recipe,
//   ): Promise<Recipe> {
//     return Promise.resolve(request);
//   }

//   // @get('{{baseUrl}}/recipes/:id/information?includeNutrition=false')
//   // async getRecipeInformation(
//   //   @requestBody() request: Recipe
//   // ): Promise<Recipe> {
//   //   const { id } = request;

//   //   const headers = {
//   //     'Authorization': `Bearer ${this.OPENAI_API_KEY}`,
//   //     'Content-Type': 'application/json',
//   //   };

//   //   try {
//   //     const apiResponse = await axios.get(`${this.OPENAI_API_URL}/recipes/${id}/information?includeNutrition=false`, { headers });
//   //     const recipeInformation = apiResponse.data;

//   //     // Process the recipe information as per your requirements
//   //     // ...

//   //     return recipeInformation;
//   //   } catch (error) {
//   //     console.error(error.response.data);
//   //     throw new Error('Failed to retrieve recipe information.');
//   //   }
//   // }

//   @post('/recipe')
//   async createRecipe(
//     @requestBody() request: Recipe
//   ): Promise<Recipe> {
//     const { recipes} = request;

//     const data = {
//       recipes,
//       max_tokens: 500,
//       temperature: 0.7,
//     };

//     const headers = {
//       'Authorization': `Bearer ${this.API_KEY}`,
//       'Content-Type': 'application/json',
//     };

//     try {
//       const apiResponse = await axios.post(this.API_URL, data, { headers });
//       const completion = apiResponse.data.choices[0].message.content;

//       // Set the completion as the assistant's response in the Chat model
      
      
//       request.response = completion;

//       return request;
//     } catch (error) {
//       console.error(error.response.data);
//       throw new Error('Failed to process the request.');
//     }
//   }
// }
