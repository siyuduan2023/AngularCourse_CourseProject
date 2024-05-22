import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Mapo Tofu', 'Mapo Tofu (麻婆豆腐 Mápó dòufǔ) is a famous Sichuan dish known for its spicy, numbing flavors. It features soft tofu and minced pork in a sauce made from fermented black beans, chili paste, and Sichuan peppercorns. Often served over rice, this dish offers a bold and satisfying taste, making it a beloved staple in Chinese cuisine.', 'https://bing.com/th?id=OSK.4f6a7a199cc2dd73a5cb974dec7071e5'),
        new Recipe('Egg Fried Rice', 'Fried rice (炒饭 chǎofàn) is a dish made from fried cooked rice and other ingredients, often including eggs, vegetables, seafood, or meat. Fried rice is one of the most common Chinese foods. It is easy to make fried rice at home using leftover rice and other meat or vegetables from the last meal.', 'https://media.citizen.co.za/wp-content/uploads/2023/08/Homemade-Egg-Rice.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}