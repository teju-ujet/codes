import { HttpErrors, get, param, post, requestBody } from '@loopback/rest';
import axios from 'axios';

const SPOONACULAR_API_KEY = '392d8314dc8c4a9f966a57f30ded5164';

export class SpoonacularController {
  @post('/recipes/search')
  async searchRecipes(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              recipe: { type: 'string' },
              Diets: { type: 'array', items: { type: 'string' } },
            },
            required: ['recipe', 'Diets'],
          },
        },
      },
    })
    requestBody: { recipe: string; Diets: string[] },
  ): Promise<any> {
    const { recipe, Diets } = requestBody;
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&query=${recipe}&diet=${Diets.join(',')}`;//https://api.spoonacular.com

    const response = await axios.get(url);
    const { results, offset, number, totalResults } = response.data;

    return {
      results,//the "results" field is an array that contains the recipes that match your query
      offset,//The "offset" field indicates the starting position of the results
      number,//The "number" field represents the number of results returned per page
      totalResults,//The response you received indicates that the total number of results The "totalResults" field represents the total number of recipes that match your query.
    };
  }
  
  @get('/recipes/{recipeId}')
  async getRecipeById(
    @param.path.string('recipeId') recipeId: string
  ): Promise<any> {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${SPOONACULAR_API_KEY}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new HttpErrors.NotFound('Recipe not found');
    }
  }
}
