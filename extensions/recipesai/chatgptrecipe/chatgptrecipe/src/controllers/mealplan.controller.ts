import { post, requestBody } from '@loopback/rest';
import axios from 'axios';
// import { readFileSync } from 'fs';

/* The `export interface Meal` statement is defining an interface in TypeScript. An interface is a way
to define the structure of an object. In this case, the `Meal` interface defines the structure of a
meal object, specifying the properties it should have (meal, mealname, carbs, protein, fat) and
their types (string, string, number, number, number). By exporting the interface, it can be imported
and used in other parts of the code. */
export interface Meal {//
  meal: string;
  mealname:string;
  carbs: number;
  protein: number;
  fat: number;
}

export interface MealPlan {
  day: string;
  dietType: string;
  cuisine: string;
  allergies: string[];
  includedIngredients: string[];
  excludedIngredients: string[];
  totalCaloriesPerDay: number;
  meals: Meal[];
}

export class MealPlanController {
  private OPENAI_API_KEY = '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';
  private OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
  // private mealPlanData: MealPlan;

  // constructor() {
  //   this.mealPlanData = JSON.parse(readFileSync('./mealPlanData.json', 'utf8'));
  // }

  @post('/mealplan')
  async chat(@requestBody() request: any): Promise<any> {
    const { messages } = request;

    const data = {
      messages,
      max_tokens: 500,
      temperature: 0.7,
      model: 'gpt-3.5-turbo',
    };

    const headers = {
      'Authorization': `Bearer ${this.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    };

    try {
      const apiResponse = await axios.post(this.OPENAI_API_URL, data, { headers });
      const responses = apiResponse.data.choices[0].message.content;

      // Set the completion as the assistant's response in the response object
      const response = {
        mealPlans: generateMealPlan(),
        responses,
      };

      return response;
    } catch (error) {
      console.error(error.response.data);
      throw new Error('Failed to process the request.');
    }
  }
}

function generateMealPlan(): MealPlan {
  const meals: Meal[] = [
    {
      meal: 'Breakfast',
      mealname:'Vegan tofu scramble with sautéed spinach, tomatoes, and spices',
      carbs: 30,
      protein: 20,
      fat: 10,
    },
    {
      meal: 'Lunch',
      mealname:'Chickpea and spinach curry served with brown rice',
      carbs: 40,
      protein: 30,
      fat: 15,
    },
    {
      meal: 'Dinner',
      mealname:'Vegetable biryani made with basmati rice, mixed vegetables, and aromatic spices',
      carbs: 35,
      protein: 25,
      fat: 12,
    },
  ];

  const mealPlan: MealPlan = {
    day: 'monday',
    totalCaloriesPerDay: 2000,
    dietType: 'Vegan',
    cuisine: 'Indian',
    allergies: ['Gluten'],
    includedIngredients: ['Tomatoes', 'Spinach'],
    excludedIngredients: ['Mushrooms'],
    meals,
  };

  return mealPlan;
}
