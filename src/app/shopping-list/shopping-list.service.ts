
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Tofu', 1),
        new Ingredient('Spring Onion', 2),
      ];
    
      getIngredients() {
        return this.ingredients.slice();
      }

      getIngredient(index: number) {
        return this.ingredients[index];
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients); //use spread operator to add all ingredients at once
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}